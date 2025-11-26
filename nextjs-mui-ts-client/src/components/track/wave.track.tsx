'use client';
import { useEffect } from "react";
import WaveSurfer from "wavesurfer.js";

const WaveTrack = () => {

    useEffect(() => {
        const element = document.getElementById('wave-track');
        if (element) {
            WaveSurfer.create({
                container: element,
                waveColor: 'rgba(107, 106, 107, 1)',
                progressColor: 'rgba(230, 115, 15, 1)',
                url: '/audio/CHILL.mp3',
            });
        }
    }, []);

    return (
        <div id="wave-track">WaveTrack</div>
    );
};

export default WaveTrack;