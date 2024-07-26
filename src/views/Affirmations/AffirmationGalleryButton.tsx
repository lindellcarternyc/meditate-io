import { useEffect, useRef } from "react";
import { GalleryPreviewData } from "../../constants/models/AffirmationCategory";
import styles from "./AffirmationPreviewButton.module.css";

interface AffirmationGalleryButtonProps {
  preview: GalleryPreviewData;
  onClick: (id: number) => void;
}

export default function AffirmationGalleryButton({
  preview,
  onClick,
}: AffirmationGalleryButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    buttonRef.current?.style.setProperty(
      "--background-image",
      `url(${preview.image})`
    );
  }, [preview]);

  return (
    <button
      type="button"
      title={preview.text}
      className={styles.button}
      ref={buttonRef}
      onClick={() => onClick(preview.id)}
    />
  );
}
