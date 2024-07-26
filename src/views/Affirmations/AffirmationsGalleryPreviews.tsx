import { ScrollArea } from "@mantine/core";
import styles from "./AffirmationsGalleryPreviews.module.css";

import AppGradient from "../../components/AppGradient";
import AffirmationGallery from "./AffirmationGallery";
import { GalleryPreviewData } from "../../constants/models/AffirmationCategory";

interface AffirmationsGalleryPreviewsProps {
  galleries: { title: string; data: GalleryPreviewData[] }[];
  onSelectGalleryPreview: (galleryId: number, previewId: number) => void;
}

export default function AffirmationsGalleryPreviews({
  galleries,
  onSelectGalleryPreview,
}: AffirmationsGalleryPreviewsProps) {
  const onSelectPreview = (galleryId: number) => {
    return (previewId: number) => onSelectGalleryPreview(galleryId, previewId);
  };

  return (
    <div className={styles.container}>
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollArea scrollbars="y" h={"100%"}>
          {galleries.map((gallery, idx) => (
            <AffirmationGallery
              key={gallery.title}
              title={gallery.title}
              previews={gallery.data}
              onSelectPreview={(previewIdx) => onSelectPreview(idx)(previewIdx)}
            />
          ))}
        </ScrollArea>
      </AppGradient>
    </div>
  );
}
