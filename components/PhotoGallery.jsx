import PhotoItem from "./PhotoItem";

const PhotoGallery = ({ photos }) => {
  return (
    <>
      {photos?.map((photo) => (
        <PhotoItem key={photo.id} />
      ))}
    </>
  );
};

export default PhotoGallery;
