import { createContext, ReactNode } from "react";
import { GalleryPreviewData } from "../../constants/models/AffirmationCategory";
import AFFIRMATION_GALLERY from "../../constants/affirmation-gallery";

export interface AffirmationsContextValue {
  galleries: {
    title: string;
    data: GalleryPreviewData[];
  }[];
  getAffirmation: (
    galleryId: number,
    affirmationId: number
  ) => GalleryPreviewData | null;
}

export const AffirmationsContext = createContext<AffirmationsContextValue>({
  galleries: [],
  getAffirmation: () => null,
});

interface AffirmationsContextProps {
  children: ReactNode;
}

export const AffirmationsProvider = ({
  children,
}: AffirmationsContextProps) => {
  const getAffirmation = (galleryId: number, affirmationId: number) => {
    const gallery = AFFIRMATION_GALLERY[galleryId];
    if (!gallery) return null;

    const affirmation = gallery.data.find((a) => a.id === affirmationId);
    return affirmation ?? null;
  };

  return (
    <AffirmationsContext.Provider
      value={{
        galleries: AFFIRMATION_GALLERY,
        getAffirmation,
      }}
    >
      {children}
    </AffirmationsContext.Provider>
  );
};
