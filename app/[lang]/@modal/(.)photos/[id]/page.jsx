import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import Modal from "@/components/Modal";
import PhotoDetails from "@/components/PhotoDetails";

const fetchSinglePhoto = async (id) => {
  const res = await fetch(`${process.env.API_URL}/photos/${id}`);
  const photo = await res.json();
  return photo.data;
};

const SingleImage = async ({ params: { lang, id } }) => {
  const dic = await getDictionary(lang);
  const photo = await fetchSinglePhoto(id);

  return (
    <Modal>
      <PhotoDetails photo={photo} />
    </Modal>
  );
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
