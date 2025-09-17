import { Link } from "react-router-dom";

function LinkButton({ to, text }) {
  return (
    <Link
      to={to}
      className="rounded-full px-4 py-2 md:px-10 md:py-4 bg-[#E44848] text-[#FFFF]"
    >
      {text}
    </Link>
  );
}

export default LinkButton;
