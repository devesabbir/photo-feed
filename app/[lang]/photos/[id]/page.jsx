import { getDictionary } from "../../dictionaries/dictionaries";
import PhotoDetails from "@/components/PhotoDetails";

const fetchSinglePhoto = async (id) => {
  const res = await fetch(`${process.env.API_URL}/photos/${id}`);
  const photo = await res.json();
  return photo.data;
};

const SingleImage = async ({ params: { lang, id } }) => {
  const dic = await getDictionary(lang);
  const photo = await fetchSinglePhoto(id);

  return <PhotoDetails photo={photo} />;
};

export default SingleImage;

export async function generateStaticParams() {
  const photos = await fetch(`${process.env.API_URL}/photos`).then((res) =>
    res.json()
  );

  return photos.data.map((photo) => ({
    id: photo.id,
  }));
}
