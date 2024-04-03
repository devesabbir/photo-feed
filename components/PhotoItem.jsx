import Image from "next/image";
import Link from "next/link";

const PhotoItem = ({ item }) => {
  return (
    <Link href={`/photos/${item.id}`} className="group">
      <Image width={700} height={700} src={item.url} alt="image" />

      <div className="title-container">
        <h4 className="title">{item.title}</h4>
      </div>
    </Link>
  );
};

export default PhotoItem;
