import PhotoGallery from "@/components/PhotoGallery";

const fetchPhotos = async () => {
  const res = await fetch(`${process.env.API_URL}/photos`);
  const photos = await res.json();
  return photos.data;
};

const PhotoGalleryPage = async ({ params: { lang } }) => {
  const photos = await fetchPhotos();

  return <PhotoGallery photos={photos} lang={lang} />;
};

export default PhotoGalleryPage;
