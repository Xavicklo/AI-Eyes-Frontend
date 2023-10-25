import labelAudio from "./labelAudio.json"

export const text2speechAPI = async (text) => {
  // const url = "http://127.0.0.1:5001/tf-js-webcam/asia-east1/api" + '/text2speech';
  const url = "https://api-3svq6ybfiq-de.a.run.app" + '/text2speech';
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: text }),
  });

  const responseData = await res.json();

  // Decode the base64 audio content
  const audioData = Uint8Array.from(atob(responseData.audioContent), c => c.charCodeAt(0));
  const blob = new Blob([audioData], { type: "audio/mpeg" });

  // Play the audio
  const sound = new Audio(URL.createObjectURL(blob));
  sound.play();
}

export const label2speech = async (audioIndexes) => {
  const playSound = (blob) => {
    return new Promise((resolve) => {
      const sound = new Audio(URL.createObjectURL(blob));
      sound.onended = () => resolve();
      sound.play();
    });
  };
  for (const index of audioIndexes) {
    const labelAudioContent = labelAudio[index];
    const labelAudioData = Uint8Array.from(atob(labelAudioContent), c => c.charCodeAt(0));
    const blob = new Blob([labelAudioData], { type: "audio/mpeg" });
    await playSound(blob);
  }
}

