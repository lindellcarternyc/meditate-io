import { useEffect, useRef, useState } from "react";
import BackButton from "../../components/BackButton";
import ImageBackground from "../../components/ImageBackground";
import Timer from "../../components/Timer";

import MEDITATION_IMAGES from "../../constants/meditation-images";
import { AUDIO_FILES, MeditationType } from "../../constants/MeditationData";

import styles from "./Meditation.module.css";
import { Button } from "@mantine/core";
import MeditationDurations from "./MeditationDurations";

interface MeditationProps {
  meditation: MeditationType;
  onClickBack: () => void;
}

export default function Meditation({
  meditation,
  onClickBack,
}: MeditationProps) {
  const [seconds, setSeconds] = useState(10);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>();

  const [isAdjustingDurtion, setIsAdjustingDuration] = useState(false);

  useEffect(() => {
    const file = AUDIO_FILES[meditation.audio];
    audioRef.current = new Audio(file);
  }, [meditation.audio]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isPlaying) {
      if (seconds <= 0) {
        setIsPlaying(false);
      } else {
        timeout = setTimeout(() => {
          setSeconds(seconds - 1);
        }, 1000);
      }
    }

    return () => clearTimeout(timeout);
  }, [seconds, isPlaying]);

  const togglePlaying = () => {
    if (isPlaying) return setIsPlaying(false);

    if (seconds <= 0) {
      setSeconds(10);
    }

    setIsPlaying(true);
  };

  const handleAdjustDuration = (seconds?: number) => {
    seconds && setSeconds(seconds);
    setIsAdjustingDuration(false);
  };

  return (
    <ImageBackground image={MEDITATION_IMAGES[meditation.id - 1]}>
      <BackButton onClick={onClickBack} />
      <div className={styles.container}>
        <Timer seconds={seconds} />
        <audio src={meditation.audio} />
        <div className={styles.buttons}>
          <Button
            type="button"
            onClick={() => {
              setIsPlaying(false);
              setIsAdjustingDuration(true);
            }}
          >
            Adjust Time
          </Button>
          <Button type="button" onClick={togglePlaying}>
            {isPlaying ? "Stop" : "Start"} Meditation
          </Button>
        </div>
      </div>
      <MeditationDurations
        open={isAdjustingDurtion}
        onClose={handleAdjustDuration}
      />
    </ImageBackground>
  );
}
