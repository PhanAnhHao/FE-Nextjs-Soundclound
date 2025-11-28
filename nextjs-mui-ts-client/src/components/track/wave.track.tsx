'use client';
import { useWavesurfer } from "@/utils/custom.hook";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

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
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    // Initialize wavesurfer when the container mounts
    // or any of the props change
    useEffect(() => {
        if (!wavesurfer) return
        setIsPlaying(false)

        const subscriptions = [
            wavesurfer.on('play', () => setIsPlaying(true)),
            wavesurfer.on('pause', () => setIsPlaying(false)),
        ]

        return () => {
            subscriptions.forEach((unsub) => unsub())
        }
    }, [wavesurfer]);

    // On play button click
    const onPlayClick = useCallback(() => {
        if (wavesurfer) {
            wavesurfer.isPlaying() ? wavesurfer.pause() : wavesurfer.play();
        }
    }, [wavesurfer]);
    return (
        <div>
            <div ref={containerRef}>WaveTrack</div>
            <button onClick={() => onPlayClick()}>
                {isPlaying === true ? "Pause" : "Play"}
            </button>
        </div>
    );
};

export default WaveTrack;