import React, { useEffect, useRef } from "react";
import { detectVideo } from "@/utils/detect";
import { Webcam } from "../utils/webcam";
import PropTypes from 'prop-types';

import "@/style/WebcamAuto.css";

const WebcamAuto = ({model}) => {
    const cameraRef = useRef(null);
    const canvasRef = useRef(null);
    // const [streaming, setStreaming] = useState(null); // streaming state
    const webcam = new Webcam(); // webcam handler

    // on mount
    useEffect(() => {
        webcam.open(cameraRef.current); // open webcam
        // cameraRef.current.style.display = "block"; // show camera
        // setStreaming("camera");
    }, []);

    // on unmount
    useEffect(() => {
        return () => {
            // webcam.close(cameraRef.current);
            // cameraRef.current.style.display = "none";
            // setStreaming(null);
        };
    }, []);

    console.log(model);

    return (
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
    );
}

WebcamAuto.propTypes = {
    model: PropTypes.object.isRequired
};

export default WebcamAuto;