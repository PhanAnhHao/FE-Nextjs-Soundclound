'use client';
import { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

const WaveTrack = () => {

    const waveSurferRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log("WaveSurfer ref:", waveSurferRef.current);
        if (waveSurferRef.current) {
            WaveSurfer.create({
                container: waveSurferRef.current,
                waveColor: 'rgba(107, 106, 107, 1)',
                progressColor: 'rgba(230, 115, 15, 1)',
                url: '/audio/CHILL.mp3',
            });
        }
    }, []);

    return (
        <div ref={waveSurferRef}>WaveTrack</div>
    );
};

export default WaveTrack;