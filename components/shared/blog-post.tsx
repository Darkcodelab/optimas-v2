import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: {
    image: string;
    title: string;
    subTitle: string;
    date: string;
    link: string;
  };
};

export default function BlogPost({ post }: Props) {
  return (
    <div className="max-w-[380px] flex flex-col gap-4 shadow-2xl rounded-lg">
      <div className="grow">
        <Image src={post.image} alt="" width={400} height={400} />
      </div>
      <div className="grow p-3">
        <h4 className="text-2xl font-bold mb-4">{post.title}</h4>
        <p>{post.subTitle}</p>
        <div className="mt-10 flex justify-between items-center text-sm">
          <p className="text-gray-500">{post.date}</p>
          <Link
            href={post.link}
            className="flex justify-center items-center gap-1 font-bold"
          >
            Read More <ChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
