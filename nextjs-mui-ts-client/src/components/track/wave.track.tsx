'use client';
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";

const WaveTrack = () => {

    const searchParams = useSearchParams();
    const fileName = searchParams.get('audio');

    const waveSurferRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (waveSurferRef.current) {
            WaveSurfer.create({
                container: waveSurferRef.current,
                waveColor: 'rgba(107, 106, 107, 1)',
                progressColor: 'rgba(230, 115, 15, 1)',
                url: `/api?audio=${fileName}`,
            });
        }
    }, []);

    return (
        <div ref={waveSurferRef}>WaveTrack</div>
    );
};

export default WaveTrack;