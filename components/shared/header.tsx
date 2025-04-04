import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="uppercase max-w-[1200px] mx-auto flex px-8 py-3 rounded-b-full gap-10 justify-center items-center bg-[#11174a67] text-white font-bold">
        <div className="flex gap-8">
          <Link href="/">Products</Link>
          <Link href="/" className="flex gap-2">
            Solutions <ChevronDown />
          </Link>
          <Link href="/">Partners</Link>
        </div>
        <div>
          <Image
            src="/images/optimas-logo-yellow.png"
            alt=""
            height={120}
            width={220}
          />
        </div>
        <div className="flex gap-8">
          <Link href="/">
            BTER<sup>&reg;</sup>
          </Link>
          <Link href="/" className="flex gap-2">
            Resources <ChevronDown />
          </Link>
          <Link href="/" className="flex gap-1">
            Company <ChevronDown />
          </Link>
        </div>
      </nav>
    </header>
  );
}
