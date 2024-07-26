import { Title } from "@mantine/core";
import { GalleryPreviewData } from "../../constants/models/AffirmationCategory";

import styles from "./AffirmationGallery.module.css";
import { Carousel } from "@mantine/carousel";
import AffirmationGalleryButton from "./AffirmationGalleryButton";

interface AffirmationGalleryProps {
  title: string;
  previews: GalleryPreviewData[];
  onSelectPreview: (id: number) => void;
}

export default function AffirmationGallery({
  title,
  previews,
  onSelectPreview,
}: AffirmationGalleryProps) {
  return (
    <div className={styles.container}>
      <Title
        size="h4"
        style={{
          color: "white",
        }}
      >
        {title}
      </Title>
      <Carousel slideSize="40%" slideGap={"md"} height={200} loop>
        {previews.map((preview) => {
          return (
            <Carousel.Slide key={preview.id}>
              <AffirmationGalleryButton
                preview={preview}
                onClick={onSelectPreview}
              />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </div>
  );
}
