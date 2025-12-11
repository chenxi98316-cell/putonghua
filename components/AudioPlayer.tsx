import React, { useCallback, useRef } from 'react';

interface AudioPlayerProps {
  base64Audio: string | undefined;
  isPlaying: boolean;
  onPlayEnd: () => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ base64Audio, isPlaying, onPlayEnd }) => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);

  const playAudio = useCallback(async () => {
    if (!base64Audio) return;

    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      }

      const ctx = audioContextRef.current;
      
      // Decode base64
      const binaryString = atob(base64Audio);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      // Gemini 2.5 TTS often returns raw PCM. We need to check if it has a header or treat as raw.
      // The instructions imply we should handle decoding.
      // If the model returns PCM without headers, decodeAudioData might fail. 
      // However, typical JS fetch of audio works with decodeAudioData if the container is valid (WAV/MP3).
      // Let's assume standard behavior first. If it fails, we treat as raw PCM.
      
      let audioBuffer: AudioBuffer;
      try {
         // Attempt standard decode (works if WAV header is present)
         audioBuffer = await ctx.decodeAudioData(bytes.buffer.slice(0)); 
      } catch (e) {
          // Fallback: Raw PCM decoding (Monophonic 16-bit 24kHz typical for Gemini)
          const dataInt16 = new Int16Array(bytes.buffer);
          audioBuffer = ctx.createBuffer(1, dataInt16.length, 24000);
          const channelData = audioBuffer.getChannelData(0);
          for (let i = 0; i < dataInt16.length; i++) {
             channelData[i] = dataInt16[i] / 32768.0;
          }
      }

      if (sourceRef.current) {
        sourceRef.current.disconnect();
      }

      const source = ctx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(ctx.destination);
      source.onended = () => {
        onPlayEnd();
      };
      
      sourceRef.current = source;
      source.start(0);

    } catch (error) {
      console.error("Audio playback error:", error);
      onPlayEnd();
    }
  }, [base64Audio, onPlayEnd]);

  React.useEffect(() => {
    if (isPlaying) {
      playAudio();
    } else {
        if (sourceRef.current) {
            try { sourceRef.current.stop(); } catch(e) {}
        }
    }
  }, [isPlaying, playAudio]);

  return null;
};

export default AudioPlayer;