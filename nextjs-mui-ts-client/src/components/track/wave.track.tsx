'use client';
import { useWavesurfer } from "@/utils/custom.hook";
import { useSearchParams } from "next/navigation";
import { useMemo, useRef } from "react";

const WaveTrack = () => {

    const searchParams = useSearchParams();
    const fileName = searchParams.get('audio');

    const containerRef = useRef<HTMLDivElement>(null);
    const optionsMemo = useMemo(() => {
        return {
            waveColor: 'rgba(107, 106, 107, 1)',
            progressColor: 'rgba(230, 115, 15, 1)',
            url: `/api?audio=${fileName}`,
        }
    }, []);

    const wavesurfer = useWavesurfer(containerRef, optionsMemo);

    return (
        <div ref={containerRef}>WaveTrack</div>
    );
};

export default WaveTrack;