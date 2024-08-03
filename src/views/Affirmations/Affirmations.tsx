import AffirmationsGalleryPreviews from "./AffirmationsGalleryPreviews";

import AFFIRMATION_GALLERY from "../../constants/affirmation-gallery";

import { useNavigate } from "react-router-dom";

export default function Affirmations() {
  const navigate = useNavigate();
  const onSelectGalleryPreview = (galleryId: number, previewId: number) => {
    navigate(`/main/affirmations/${galleryId}/${previewId}`);
  };

  return (
    <AffirmationsGalleryPreviews
      galleries={AFFIRMATION_GALLERY}
      onSelectGalleryPreview={onSelectGalleryPreview}
    />
  );
}
