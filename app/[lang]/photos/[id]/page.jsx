import Image from "next/image";
import { getDictionary } from "../../dictionaries/dictionaries";
import followIcon from "@/public/assets/icons/follow.svg";
import heartIcon from "@/public/assets/icons/heart.svg";
import shareIcon from "@/public/assets/icons/share.svg";
import saveIcon from "@/public/assets/icons/save.svg";

const fetchSinglePhoto = async (id) => {
  const res = await fetch(`${process.env.API_URL}/photos/${id}`);
  const photo = await res.json();
  return photo.data;
};

const SingleImage = async ({ params: { lang, id } }) => {
  const dic = await getDictionary(lang);
  const photo = await fetchSinglePhoto(id);

  return (
    <div className="container my-4 lg:my-8">
      <div className="grid grid-cols-12 gap-4 2xl:gap-10 ">
        <div className="col-span-12 lg:col-span-8 border rounded-xl">
          <Image
            className="max-w-full h-full max-h-[70vh] mx-auto"
            width={900}
            height={900}
            src={photo.url}
            alt={photo.title}
          />
        </div>
        {/* main photo ends */}
        {/* details card */}
        <div className="p-6 border rounded-xl col-span-12 lg:col-span-4  ">
          <h2 className="text-lg lg:text-2xl font-bold mb-2">{photo.title}</h2>
          <div className="text-xs lg:text-sm text-black/60 mb-6">
            {photo?.tags?.map((tag) => (
              <span key={tag}>#{tag} </span>
            ))}
          </div>
          {/* info rows */}
          <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">
            {/* item start */}
            <div className="flex justify-between">
              <span>Views</span>
              <span className="font-bold">{photo.views}</span>
            </div>
            {/* item ends */}
            {/* item start */}
            <div className="flex justify-between">
              <span>Share</span>
              <span className="font-bold">{photo.share}</span>
            </div>
            {/* item ends */}
            {/* item start */}
            <div className="flex justify-between">
              <span>Up loaded</span>
              <span className="font-bold">{photo.uploaded}</span>
            </div>
            {/* item ends */}
          </div>
          {/* info rows ends */}
          {/* author info */}
          <div className="mt-6">
            {/* author header */}
            <div className="flex justify-between items-center mb-3">
              {/*  */}
              <div className="flex items-center gap-3">
                <Image
                  width={100}
                  height={100}
                  className="size-12 lg:size-14 rounded-full border"
                  src={photo.author.avatar}
                  alt="avatar"
                />
                <div className="spacy-y-3">
                  <h6 className="lg:text-lg font-bold">Saad Hasan</h6>
                  <p className="text-black/60 text-xs lg:text-sm">
                    420 Followers
                  </p>
                </div>
              </div>
              {/* action */}
              <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
                <Image
                  alt=""
                  src={followIcon}
                  className="w-5 h-5"
                  width={100}
                  height={100}
                />
                Follow
              </button>
            </div>
            {/* author bio */}
            <p className="text-xs lg:text-sm text-black/60">
              I am a portrait photographer in Michigan, and happily share my
              hard work so others can find and use my photos for FREE!
            </p>
          </div>
          {/* author info ends */}
          {/* actions */}
          <div className="mt-6">
            <div className="flex items-stretch gap-3">
              <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                <Image src={heartIcon} alt="" className="w-5 h-5" />
                {photo.likes}
              </button>
              <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                <Image src={saveIcon} alt="" className="w-5 h-5" />
                Save
              </button>
              <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                <Image src={shareIcon} alt="" className="w-5 h-5" />
                Share
              </button>
            </div>
          </div>
        </div>
        {/* details card ends */}
      </div>
      {/*  */}
    </div>
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
