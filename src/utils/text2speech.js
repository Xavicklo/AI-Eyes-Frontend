import labels from "./labels.json";
import audio from "./audio.json"

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
  console.log('%ctext2speech.js line:26 audio.length', 'color: #007acc;', audio.length);
  console.log('%ctext2speech.js line:26 label.length', 'color: #007acc;', labels.length);
  const playSound = (blob) => {
    return new Promise((resolve) => {
      const sound = new Audio(URL.createObjectURL(blob));
      sound.onended = () => resolve();
      sound.play();
    });
  };
  for (const index of audioIndexes) {
    const audioContent = audio[index];
    const audioData = Uint8Array.from(atob(audioContent), c => c.charCodeAt(0));
    const blob = new Blob([audioData], { type: "audio/mpeg" });
    await playSound(blob);
  }
}

export const vibration = (duration) => {

  if ("vibrate" in navigator) {
    navigator.vibrate([200, 100, 300]);


    setTimeout(() => {
      navigator.vibrate(200);
    }, 1000);

  }

  // 停止震動
  navigator.vibrate(0);
}