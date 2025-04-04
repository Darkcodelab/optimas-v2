import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white bg-[url('/images/footer-bg.png')] bg-left bg-no-repeat">
      <div className="container mx-auto py-16 pb-32 flex flex-wrap justify-between gap-8 font-light">
        <div>
          <Image
            src="/images/optimas-logo-yellow.png"
            alt=""
            width={220}
            height={120}
          />
        </div>
        <div>
          <h4 className="text-secondary-yellow font-bold text-lg">
            Quick Links
          </h4>
          <div className="mt-4 space-y-4">
            <p>Home</p>
            <p>Products</p>
            <p>Partners</p>
            <p>
              BTER<sup>&reg;</sup>
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-secondary-yellow font-bold text-lg">Solutions</h4>
          <div className="mt-4 space-y-4">
            <p>Use Cases</p>
            <p>Industries</p>
            <p>Personas</p>
          </div>
        </div>
        <div>
          <h4 className="text-secondary-yellow font-bold text-lg">Resources</h4>
          <div className="mt-4 space-y-4">
            <p>Blogs</p>
            <p>Customer Stories</p>
            <p>Data Sheets</p>
            <p>Events</p>
            <p>Press Release</p>
            <p>Reports & Research</p>
            <p>Webinars</p>
            <p>Whitepapers</p>
          </div>
        </div>
        <div>
          <h4 className="text-secondary-yellow font-bold text-lg">Company</h4>
          <div className="mt-4 space-y-4">
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Newsroom</p>
            <p>Careers</p>
          </div>
        </div>
        <div>
          <h4 className="text-secondary-yellow font-bold text-lg">Subscribe</h4>
          <div className="mt-4 space-y-4">
            <p className="max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem,
              ipsum.
            </p>
            <div className="rounded-full bg-white pl-3 max-w-[250px] flex justify-between items-center">
              <p className="text-xs text-gray-500">Email address</p>
              <div className="bg-secondary-yellow px-4 py-2 rounded-full">
                <MoveRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#070B33] text-white text-sm text-light">
        <div className="container mx-auto px-2 py-6 flex justify-between items-center">
          <p>
            Privacy Policy | Terms and Conditions | Copyright &copy; 2025
            Optimas AI
          </p>
          <div className="space-x-4 flex">
            <Image
              src="/images/facebook-icon.png"
              alt=""
              width={30}
              height={30}
            />
            <Image
              src="/images/linkedin-icon.png"
              alt=""
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
