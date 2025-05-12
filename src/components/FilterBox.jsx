import Svg from "./Svg";

function FilterBox() {
  return (
    <div
      className={`px-[40px] py-[16px] border border-[#DADDE1] cursor-pointer flex flex-col items-center gap-[8px] rounded-xl`}
    >
      <Svg cssClass="size-[32px]" iconName="empty-hearth" />

      <p>AC</p>
    </div>
  );
}

export default FilterBox;
