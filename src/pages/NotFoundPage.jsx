import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

function NotFoundPage() {
  return (
    <>
      <Navigation />
      <div className="flex flex-col justify-center p-10 ">
        <h1 className="text-center">
          Looks like you missed the campsite. Let’s go{" "}
          <Link to="/" className="activeLink underline">
            home!
          </Link>
        </h1>
        <svg className="w-full h-[50dvh] md:h-screen">
          <use href="/notFound.svg" />
        </svg>
      </div>
    </>
  );
}

export default NotFoundPage;
