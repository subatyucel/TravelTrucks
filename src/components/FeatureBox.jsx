import Svg from "./Svg";

function FeatureBox({ iconName, text }) {
  return (
    <li className="flex items-center gap-[8px] font-medium rounded-full bg-[#F2F4F7] py-1.5 px-2.5 md:py-3 md:px-4.5">
      <Svg cssClass="size-3 md:size-5" iconName={iconName} />
      <p>{text}</p>
    </li>
  );
}

export default FeatureBox;
