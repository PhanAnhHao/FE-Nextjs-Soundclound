'use client';
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

// WaveSurfer hook
const useWavesurfer = (containerRef: any, options: any) => {
    const [wavesurfer, setWavesurfer] = useState<any>(null)

    // Initialize wavesurfer when the container mounts
    // or any of the props change
    useEffect(() => {
        if (!containerRef.current) return

        const ws = WaveSurfer.create({
            ...options,
            container: containerRef.current,
        })

        setWavesurfer(ws)

        return () => {
            ws.destroy()
        }
    }, [options, containerRef])

    return wavesurfer
}

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

    // const options = {
    //     waveColor: 'rgba(107, 106, 107, 1)',
    //     progressColor: 'rgba(230, 115, 15, 1)',
    //     url: `/api?audio=${fileName}`,
    // }

    const wavesurfer = useWavesurfer(containerRef, optionsMemo);

    // useEffect(() => {
    //     if (containerRef.current) {
    //         const ws = WaveSurfer.create({
    //             container: containerRef.current,
    //             waveColor: 'rgba(107, 106, 107, 1)',
    //             progressColor: 'rgba(230, 115, 15, 1)',
    //             url: `/api?audio=${fileName}`,
    //         });
    //         return () => {
    //             ws.destroy()
    //         }
    //     }
    // }, []);

    return (
        <div ref={containerRef}>WaveTrack</div>
    );
};

export default WaveTrack;