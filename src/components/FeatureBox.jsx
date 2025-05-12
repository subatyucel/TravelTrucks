import Svg from "./Svg";

function FeatureBox({ iconName, text }) {
  return (
    <li className="flex items-center gap-[8px] font-medium rounded-full bg-[#F2F4F7] py-[12px] px-[18px]">
      <Svg cssClass="size-[20px]" iconName={iconName} />
      <p>{text}</p>
    </li>
  );
}

export default FeatureBox;
