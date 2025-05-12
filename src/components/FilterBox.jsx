import Svg from "./Svg";
import { useDispatch, useSelector } from "react-redux";
import { updateFilters } from "../redux/filterSlice";

function FilterBox({ iconName, text, filterName, filterValue }) {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter[filterName]);
  const selected = filter === filterValue;

  function handleClick() {
    dispatch(updateFilters({ [filterName]: selected ? "" : filterValue }));
  }

  return (
    <li
      className={`px-[40px] py-[16px] border border-[${
        selected ? "#E44848" : "#DADDE1"
      }] cursor-pointer flex flex-col items-center gap-[8px] rounded-xl w-[112px] text-center justify-center`}
      onClick={handleClick}
    >
      <Svg cssClass="size-[32px]" iconName={iconName} />

      <p>{text}</p>
    </li>
  );
}

export default FilterBox;
