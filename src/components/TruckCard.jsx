import { Link } from "react-router-dom";
import RedButton from "./RedButton";

function TruckCard() {
  return (
    <div className="flex border border-[] p-[24px] gap-[24px] rounded-lg w-[888px]">
      <img
        src="https://ftp.goit.study/img/campers-test-task/8-1.webp"
        alt=""
        className="w-[292px] h-[320px] object-cover object-left rounded-lg"
      />

      <div className="w-full flex flex-col gap-[24px] items-start ">
        <div className="flex justify-between self-stretch">
          <h2 className="font-semibold text-2xl">Mavericks</h2>
          <div className="flex items-center  gap-[12px]">
            <h2 className="font-semibold text-2xl">€8000.00</h2>
            <svg className="w-[24px] h-[24px]">
              <use href="/public/icons.svg#icon-empty-hearth" />
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-[16px]">
          <div className="flex items-center gap-[4px]">
            <svg className="w-[16px] h-[16px] ">
              <use href="/icons.svg#icon-filled-hearth" />
            </svg>
            <p>4.4(2 Reviews)</p>
          </div>

          <div className="flex items-center gap-[4px]">
            <svg className="w-[16px] h-[16px]">
              <use href="/icons.svg#icon-filled-hearth" />
            </svg>
            <p>Kyiv, Ukraine</p>
          </div>
        </div>
        <p className="">
          Embrace simplicity and freedom with the Mavericks panel truck...
        </p>

        <div>
          <ul className="flex flex-wrap gap-[8px]">
            <li className="flex items-center gap-[8px] font-medium rounded-full bg-[#F2F4F7] py-[12px] px-[18px]">
              <svg className="w-[20px] h-[20px]">
                <use href="/icons.svg#icon-filled-hearth" />
              </svg>
              <p>Automatic</p>
            </li>
          </ul>
        </div>

        <RedButton to="1" text="Show more" />
      </div>
    </div>
  );
}

export default TruckCard;
