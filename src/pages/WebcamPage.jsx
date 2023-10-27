import React from "react";
import WebcamAuto from "@/components/WebcamAuto";
import useModel from "@/hooks/model";
import useAudioLoader from "../hooks/audio";
import { IonLoading } from '@ionic/react';
import labelAudioPathList from "../assets/json/mp3.json"

const WebcamPage = () => {
    const { model, loading } = useModel("yolov5n");
    const { isLoaded, initAudios, playAudio } = useAudioLoader(labelAudioPathList);

    return (
        <>
            <IonLoading isOpen={loading.loading} message={`Loading model... ${(loading.progress * 100).toFixed(2)}%`} />
            {model.net && <WebcamAuto model={model} playAudio={playAudio} />}
            <div>
                {!isLoaded && (
                    <button onClick={initAudios}>
                        加載音頻
                    </button>
                )}
            </div>
        </>
    );
};

export default WebcamPage;
