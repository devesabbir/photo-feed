import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="max-w-[100px] md:max-w-[165px]"
        src="/assets/lws_logo.png"
        alt="Lws"
        width={150}
        height={100}
      />
    </Link>
  );
};

export default Logo;
