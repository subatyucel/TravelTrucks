import { Link } from "react-router-dom";

function Hero() {
  return (
    <main className="w-full h-dvh bg-top-left relative text-white hero">
      <div className="flex flex-col px-[64px] justify-center h-full items-start gap-[40px]">
        <div>
          <h1 className="font-semibold text-5xl text-[#F7F7F7]">
            Campers of your dreams
          </h1>
          <h2 className="font-semibold text-2xl text-[#F7F7F7]">
            You can find everything you want in our catalog
          </h2>
        </div>

        <Link
          to="/catalog"
          className="rounded-full px-[48.5px] py-[16px] bg-[#E44848]"
        >
          View Now
        </Link>
      </div>
    </main>
  );
}

export default Hero;
