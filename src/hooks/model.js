import { useState, useEffect } from 'react';
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl"; // set backend to webgl

const useModel = (modelName) => {
    const [loading, setLoading] = useState({ loading: true, progress: 0 }); // loading state
    const [model, setModel] = useState({
        net: null,
        inputShape: [1, 0, 0, 3],
    }); // init model & input shape

    useEffect(() => {
        tf.ready().then(async () => {
            console.log(`loading model ${window.location.href}/${modelName}_web_model/model.json`)
            const yolov5 = await tf.loadGraphModel(
                `${window.location.href}/${modelName}_web_model/model.json`,
                {
                    onProgress: (fractions) => {
                        setLoading({ loading: true, progress: fractions }); // set loading fractions
                    },
                }
            );
            console.oog("Completed loading model")

            console.log("Warming up model")
            const dummyInput = tf.ones(yolov5.inputs[0].shape);
            const warmupResult = await yolov5.executeAsync(dummyInput);
            tf.dispose(warmupResult); // cleanup memory
            tf.dispose(dummyInput); // cleanup memory
            console.log("Completed warming up model")

            setLoading({ loading: false, progress: 1 });
            setModel({
                net: yolov5,
                inputShape: yolov5.inputs[0].shape,
            }); // set model & input shape
        });
    }, []);
    return {
        model,
        loading,
    };
}

export default useModel;