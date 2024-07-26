import AffirmationsGalleryPreviews from "./AffirmationsGalleryPreviews";

import AFFIRMATION_GALLERY from "../../constants/affirmation-gallery";
import { GalleryPreviewData } from "../../constants/models/AffirmationCategory";
import { useState } from "react";
import Affirmation from "./Affirmation";

export default function Affirmations() {
  const [selectedAffirmation, setSelectedAffirmation] =
    useState<GalleryPreviewData | null>(null);

  const onSelectGalleryPreview = (galleryId: number, previewId: number) => {
    const gallery = AFFIRMATION_GALLERY[galleryId];
    if (!gallery) return setSelectedAffirmation(null);

    const preview = gallery.data.find((p) => p.id === previewId);
    if (!preview) return setSelectedAffirmation(null);

    return setSelectedAffirmation(preview);
  };
  return selectedAffirmation ? (
    <Affirmation
      affirmation={selectedAffirmation}
      onClickBack={() => setSelectedAffirmation(null)}
    />
  ) : (
    <AffirmationsGalleryPreviews
      galleries={AFFIRMATION_GALLERY}
      onSelectGalleryPreview={onSelectGalleryPreview}
    />
  );
}
