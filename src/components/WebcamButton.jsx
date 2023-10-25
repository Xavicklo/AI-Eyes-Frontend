import React, { useState } from "react";
import { Webcam } from "../utils/webcam";
import { IonButton } from '@ionic/react';
import PropTypes from 'prop-types';

const WebcamButton = ({cameraRef}) => {
  const [streaming, setStreaming] = useState(null); // streaming state
  const webcam = new Webcam(); // webcam handler
  return (
    <IonButton
        onClick={() => {
          if (streaming === null) {
            webcam.open(cameraRef.current); // open webcam
            cameraRef.current.style.display = "block"; // show camera
            setStreaming("camera");
          }
          else if (streaming === "camera") {
            webcam.close(cameraRef.current);
            cameraRef.current.style.display = "none";
            setStreaming(null);
          }
        }}
      >
        {streaming === "camera" ? "Close" : "Open"} Webcam
      </IonButton>
  );
}

WebcamButton.propTypes = {
  cameraRef: PropTypes.object.isRequired
};

export default WebcamButton;