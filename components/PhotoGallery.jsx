import PhotoItem from "./PhotoItem";

const PhotoGallery = ({ photos, lang }) => {
  return (
    <div className="img-grid">
      {photos?.map((photo) => (
        <PhotoItem key={photo.id} item={photo} lang={lang} />
      ))}
    </div>
  );
};

export default PhotoGallery;
