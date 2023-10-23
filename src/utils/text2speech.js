
const text2speech = async (text) => {
  // const url = "http://127.0.0.1:5001/tf-js-webcam/asia-east1/api" + '/text2speech';
  const url = "https://api-3svq6ybfiq-de.a.run.app" + '/text2speech';
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({text: text}),
  });

  const responseData = await res.json();

  // Decode the base64 audio content
  const audioData = Uint8Array.from(atob(responseData.audioContent), c => c.charCodeAt(0));
  const blob = new Blob([audioData], { type: "audio/mpeg" });

  // Play the audio
  const audio = new Audio(URL.createObjectURL(blob));
  audio.play();
}
export default text2speech;