import { useContext, useEffect, useRef, useState } from "react";
import BackButton from "../../components/BackButton";
import ImageBackground from "../../components/ImageBackground";
import Timer from "../../components/Timer";

import MEDITATION_IMAGES from "../../constants/meditation-images";
import { AUDIO_FILES } from "../../constants/MeditationData";

import styles from "./Meditation.module.css";
import { Button } from "@mantine/core";
import MeditationDurations from "./MeditationDurations";
import { MeditationContext } from "./MeditationContext";
import { useNavigate, useParams } from "react-router-dom";
import { useTimer } from "../../hooks/use-timer";

export default function Meditation() {
  const navigate = useNavigate();

  const { id } = useParams();
  const { getMeditation } = useContext(MeditationContext);
  const meditation = getMeditation(Number(id));

  if (!meditation) {
    throw new Error("No meditation found");
  }

  const audioRef = useRef<HTMLAudioElement>();

  const [isAdjustingDurtion, setIsAdjustingDuration] = useState(false);

  const { isTicking, setIsTicking, seconds, setSeconds } = useTimer();

  useEffect(() => {
    const file = AUDIO_FILES[meditation.audio];
    audioRef.current = new Audio(file);
  }, [meditation]);

  useEffect(() => {
    if (isTicking) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }

    return () => audioRef.current?.pause();
  }, [isTicking]);

  const togglePlaying = () => {
    if (isTicking) return setIsTicking(false);

    if (seconds <= 0) {
      setSeconds(10);
    }

    setIsTicking(true);
  };

  const handleAdjustDuration = (seconds?: number) => {
    seconds && setSeconds(seconds);
    setIsAdjustingDuration(false);
  };

  return (
    <ImageBackground image={MEDITATION_IMAGES[meditation.id - 1]}>
      <BackButton onClick={() => navigate("/main/meditations")} />
      <div className={styles.container}>
        <Timer seconds={seconds} />
        <div className={styles.buttons}>
          <Button
            type="button"
            onClick={() => {
              setIsTicking(false);
              setIsAdjustingDuration(true);
            }}
          >
            Adjust Time
          </Button>
          <Button type="button" onClick={togglePlaying}>
            {isTicking ? "Stop" : "Start"} Meditation
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
