import React from "react";
import WebcamAuto from "@/components/WebcamAuto";
import useModel from "@/hooks/model";

import { IonLoading } from '@ionic/react';

const WebcamPage = () => {
    const { model, loading } = useModel("yolov5n");

    return (
        <>
            <IonLoading isOpen={loading.loading} message={`Loading model... ${(loading.progress * 100).toFixed(2)}%`}  />
            {model.net && <WebcamAuto model={model} />}
        </>
    );
};

export default WebcamPage;
