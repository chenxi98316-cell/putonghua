import { GoogleGenAI, Modality } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Audio Helper
async function decodeAudioData(base64String: string, audioContext: AudioContext): Promise<AudioBuffer> {
  const binaryString = atob(base64String);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return await audioContext.decodeAudioData(bytes.buffer);
}

export const generateSpeech = async (text: string): Promise<string | null> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Puck' }, // Puck is usually clear for general use
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) return null;

    return base64Audio;
  } catch (error) {
    console.error("TTS Error:", error);
    return null;
  }
};

export const generateIllustration = async (word: string, meaning: string): Promise<string | null> => {
  try {
    const prompt = `Create a simple, cute, flat vector educational illustration for the Chinese word "${word}" which means "${meaning}". The style should be like a primary school textbook. Minimalist, colorful, white background. NO TEXT inside the illustration.`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image', // "Nano banana" equivalent
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        // Nano banana doesn't support extensive config, keeping it simple
      },
    });

    let imageUrl = null;
    for (const part of response.candidates?.[0]?.content?.parts || []) {
       if (part.inlineData) {
        const base64EncodeString = part.inlineData.data;
        imageUrl = `data:image/png;base64,${base64EncodeString}`;
        break;
      }
    }
    return imageUrl;
  } catch (error) {
    console.error("Image Gen Error:", error);
    return null;
  }
};
