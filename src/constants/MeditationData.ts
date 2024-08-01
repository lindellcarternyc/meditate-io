export interface MeditationType {
  id: number;
  title: string;
  image: string;
  audio: string;
}

export const MEDITATION_DATA: MeditationType[] = [
  {
    id: 1,
    title: "Mountains",
    image: "trees.webp",
    audio: "trees.mp3",
  },
  {
    id: 2,
    title: "Rivers",
    image: "river.webp",
    audio: "river.mp3",
  },
  {
    id: 3,
    title: "Sunset",
    image: "meditate-under-tree.webp",
    audio: "meditate-under-tree.mp3",
  },
  {
    id: 4,
    title: "Beaches",
    image: "beach.webp",
    audio: "beach.mp3",
  },
  {
    id: 5,
    title: "Starry Night",
    image: "yosemite-stars.webp",
    audio: "yosemite-stars.mp3",
  },
  {
    id: 6,
    title: "Waterfall",
    image: "waterfall.webp",
    audio: "waterfall.mp3",
  },
];

import trees from "../assets/audio/trees.mp3";
import river from "../assets/audio/river.mp3";
import meditate from "../assets/audio/meditate-under-tree.mp3";
import beach from "../assets/audio/beach.mp3";
import yosemite from "../assets/audio/yosemite-stars.mp3";
import waterfall from "../assets/audio/waterfall.mp3";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AUDIO_FILES: { [key: string]: any } = {
  "trees.mp3": trees,
  "river.mp3": river,
  "meditate-under-tree.mp3": meditate,
  "beach.mp3": beach,
  "yosemite-stars.mp3": yosemite,
  "waterfall.mp3": waterfall,
};
