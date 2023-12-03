import React from "react";
import WebcamAuto from "@/components/WebcamAuto";
import useModel from "@/hooks/model";
import useAudioLoader from "../hooks/audio";
import { IonLoading, IonButton, IonIcon } from "@ionic/react";
import { volumeHighOutline } from "ionicons/icons";
import labelAudioPathList from "../assets/json/mp3.json";

const WebcamPage = () => {
  const { model, loading } = useModel("yolov5n");
  const { isLoaded, initAudios, playAudio } =
    useAudioLoader(labelAudioPathList);

  return (
    <>
      <IonLoading
        isOpen={loading.loading}
        message={`Loading model... ${(loading.progress * 100).toFixed(2)}%`}
      />
      {model.net && <WebcamAuto model={model} playAudio={playAudio} />}
      <>
        {!isLoaded && (
          <IonButton onClick={initAudios}>
            <IonIcon slot="start" icon={volumeHighOutline}></IonIcon>
            Load Audios
          </IonButton>
        )}
      </>
    </>
  );
};

export default WebcamPage;
