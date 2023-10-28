import { useState, useRef, useCallback } from 'react';

function useAudioLoader(labelAudioPathList) {
    const [isLoaded, setLoaded] = useState(false);
    const audioRefs = useRef({});

    const initAudios = useCallback(() => {
        labelAudioPathList.forEach((filePath) => {
            const audio = new Audio(filePath);
            audioRefs.current[filePath] = audio;
        });
        setLoaded(true);
    }, []);

    const playAudio = useCallback((filePath) => {
        if (audioRefs.current[filePath]) {
            audioRefs.current[filePath].play();
            console.log('%caudio.js line:18 audioRefs.current[filePath].play()', 'color: #007acc;');
        }
    }, []);

    return {
        isLoaded,
        initAudios,
        playAudio,
    };
}

export default useAudioLoader;
