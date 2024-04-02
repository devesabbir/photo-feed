import Image from "next/image";

const PhotoGallery = () => {
  return (
    <div class="img-grid">
      <a href="./single.html" class="group">
        <Image
          width={700}
          height={700}
          src="https://source.unsplash.com/ztpUS4N1xhY"
          alt=""
        />

        <div class="title-container">
          <h4 class="title">The Beautiful Nature</h4>
        </div>
      </a>
    </div>
  );
};

export default PhotoGallery;
