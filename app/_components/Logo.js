import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-5 z-10">
      <Image
        src={logo}
        width={60}
        height={60}
        alt="The Wild Oasis logo"
        className="w-[60px] h-[60px]"
        priority
      />
      <span className="text-xl font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
