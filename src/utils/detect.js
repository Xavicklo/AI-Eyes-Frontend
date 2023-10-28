import * as tf from "@tensorflow/tfjs";
import { renderBoxes } from "./renderBox";

/**
 * Preprocess image / frame before forwarded into the model
 * @param {HTMLVideoElement|HTMLImageElement} source
 * @param {Number} modelWidth
 * @param {Number} modelHeight
 * @returns input tensor, xRatio and yRatio
 */
const preprocess = (source, modelWidth, modelHeight) => {
    let xRatio, yRatio; // ratios for boxes

    const input = tf.tidy(() => {
        const img = tf.browser.fromPixels(source);

        // padding image to square => [n, m] to [n, n], n > m
        const [h, w] = img.shape.slice(0, 2); // get source width and height
        const maxSize = Math.max(w, h); // get max size
        const imgPadded = img.pad([
            [0, maxSize - h], // padding y [bottom only]
            [0, maxSize - w], // padding x [right only]
            [0, 0],
        ]);

        xRatio = maxSize / w; // update xRatio
        yRatio = maxSize / h; // update yRatio

        return tf.image
            .resizeBilinear(imgPadded, [modelWidth, modelHeight]) // resize frame
            .div(255.0) // normalize
            .expandDims(0); // add batch
    });

    return [input, xRatio, yRatio];
};

/**
 * Function to detect video from every source.
 * @param {HTMLVideoElement} vidSource video source
 * @param {tf.GraphModel} model loaded YOLOv5 tensorflow.js model
 * @param {Number} classThreshold class threshold
 * @param {HTMLCanvasElement} canvasRef canvas reference
 */
let stopDetect = null;
export const detectVideo = (vidSource, model, classThreshold, canvasRef, playAudio) => {
    const [modelWidth, modelHeight] = model.inputShape.slice(1, 3); // get model width and height

    /**
   * Function to detect every frame from video
   */
    stopDetect = false;
    const detectFrame = async (counter) => {
        if (vidSource.videoWidth === 0 && vidSource.srcObject === null) {
            const ctx = canvasRef.getContext("2d");
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // clean canvas
            return; // handle if source is closed
        }

        tf.engine().startScope(); // start scoping tf engine
        const [input, xRatio, yRatio] = preprocess(vidSource, modelWidth, modelHeight);

        let klasses;

        await model.net.executeAsync(input).then((res) => {
            const [boxes, scores, classes] = res.slice(0, 3);
            const boxes_data = boxes.dataSync();
            const scores_data = scores.dataSync();
            const classes_data = classes.dataSync();
            klasses = renderBoxes(canvasRef, classThreshold, boxes_data, scores_data, classes_data, [
                xRatio,
                yRatio,
            ]); // render boxes
            tf.dispose(res); // clear memory
        });

        counter += 1;
        if(!stopDetect) {
            setTimeout(()=>{
                detectFrame(counter);
            }, 100); // get another frame with a delay of 100ms
        }
        if (klasses.length > 0) {
            speakDetectedLabel(counter, klasses, playAudio);
        }
        // console.log("Detector timer: ", detectorTimer)
        tf.engine().endScope(); // end of scoping
    };
    
    detectFrame(0); // initialize to detect every frame
};

const speakDetectedLabel = async (counter, klasses, playAudio) => {
    if (counter % 30 === 0) {
        const audioLabels = klasses.map((klass) => klass.label);
        if (audioLabels.length <= 0) {
            return;
        }
        for (let i = 0; i < audioLabels.length; i++) {
            playAudio(`/assets/mp3/${audioLabels[i]}.mp3`);
            await new Promise(resolve => setTimeout(resolve, 500));  // wait for 1 second (or the duration of your audio)
        }
    }
}


export const stopDetectVideo = () => {
    stopDetect = true;
}
