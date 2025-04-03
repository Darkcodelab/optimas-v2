import Image from "next/image";

export default function LandingBanner() {
  return (
    <section>
      <div>
        <Image
          src="/images/landing/bg-banner.jpg"
          alt=""
          width={300}
          height={120}
        />
      </div>
    </section>
  );
}
