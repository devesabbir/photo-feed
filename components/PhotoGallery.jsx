import PhotoItem from "./PhotoItem";

const PhotoGallery = ({ photos }) => {
  return (
    <div className="img-grid">
      {photos?.map((photo) => (
        <PhotoItem key={photo.id} item={photo} />
      ))}
    </div>
  );
};

export default PhotoGallery;
