import Link from "next/link";
import ArrowIcon from "./components/svgs/arrow_icon";
import { Button } from "./components/UI";


export default function Home() {
  return (
    <>
      <div className="bg-slate-100 h-full w-full"  aria-label="intro page">
        <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
            {/* <!-- Title --> */}
            <div className="max-w-3xl text-center mx-auto pt-10">
              <h1 className="block font-medium text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Say hello to the Dharmabot.
              </h1>
            </div>
            {/* <!-- End Title --> */}

            {/* <!-- Buttons --> */}
            <div className="text-center mt-10">
                <Link href="/world">
                  <Button className="bg-black hover:bg-gray-700">
                    Enter 
                  </Button>
                </Link>
            </div>
            {/* <!-- End Buttons --> */}
          </div>
        </div>
      </div>
      {/* <!-- End Hero --> */}
    </>
  );
}
