import { getDictionary } from "../dictionaries/dictionaries";

const GalleryPage = async ({ params: { lang } }) => {
  const dic = await getDictionary(lang);

  return <div>{dic.Hello}</div>;
};

export default GalleryPage;
