import React, { useRef } from "react";
import WebcamButton from "./components/WebcamButton";
import { detectVideo } from "./utils/detect";
import "./style/App.css";
import '@ionic/react/css/core.css';
import useModel from "./hooks/model";

import { setupIonicReact, IonLoading } from '@ionic/react';
setupIonicReact();

const App = () => {
  const cameraRef = useRef(null);
  const canvasRef = useRef(null);
  const { model, loading } = useModel("yolov5n");

  return (
    <div className="App">
      <IonLoading isOpen={loading.loading} message={`Loading model... ${(loading.progress * 100).toFixed(2)}%`}  />
      <div className="content">
        <video
          autoPlay
          playsInline
          muted
          ref={cameraRef}
          onPlay={() => detectVideo(cameraRef.current, model, 0.1, canvasRef.current)}
        />
        <canvas width={model.inputShape[1]} height={model.inputShape[2]} ref={canvasRef} />
      </div>
      <WebcamButton cameraRef={cameraRef} />
    </div>
  );
};

export default App;
