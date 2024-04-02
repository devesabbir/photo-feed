import Image from "next/image";
import Link from "next/link";

const PhotoItem = ({ item, lang }) => {
  return (
    <>
      <Link href={`/${lang}/photos/${item.id}`} class="group">
        <Image width={700} height={700} src={item.url} alt="" />

        <div class="title-container">
          <h4 class="title">{item.title}</h4>
        </div>
      </Link>
    </>
  );
};

export default PhotoItem;
