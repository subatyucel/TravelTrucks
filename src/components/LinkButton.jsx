import { Link } from "react-router-dom";

function LinkButton({ to, text }) {
  return (
    <Link
      to={to}
      className="rounded-full px-[40px] py-[16px] bg-[#E44848] text-[#FFFF]"
    >
      {text}
    </Link>
  );
}

export default LinkButton;
