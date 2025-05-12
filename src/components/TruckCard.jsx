import LinkButton from "./LinkButton";
import Svg from "./Svg";

function TruckCard() {
  return (
    <div className="flex border border-[] p-[24px] gap-[24px] rounded-lg w-[840px]">
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
            <Svg cssClass="size-[24px]" iconName="empty-hearth" />
          </div>
        </div>
        <div className="flex items-center gap-[16px]">
          <div className="flex items-center gap-[4px]">
            <Svg cssClass="size-[16px]" iconName="filled-hearth" />

            <p>4.4(2 Reviews)</p>
          </div>

          <div className="flex items-center gap-[4px]">
            <Svg cssClass="size-[16px]" iconName="filled-hearth" />
            <p>Kyiv, Ukraine</p>
          </div>
        </div>
        <p className="">
          Embrace simplicity and freedom with the Mavericks panel truck...
        </p>

        <div>
          <ul className="flex flex-wrap gap-[8px]">
            <li className="flex items-center gap-[8px] font-medium rounded-full bg-[#F2F4F7] py-[12px] px-[18px]">
              <Svg cssClass="size-[20px]" iconName="filled-hearth" />
              <p>Automatic</p>
            </li>
          </ul>
        </div>

        <LinkButton to="1" text="Show more" type="Link" />
      </div>
    </div>
  );
}

export default TruckCard;
