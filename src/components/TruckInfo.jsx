import Svg from "../components/Svg";

function TruckInfo() {
  return (
    <div className="flex flex-col gap-[16px]">
      <h1 className="text-[#101828] text-2xl font-semibold">Mavericks</h1>

      <div className="flex items-center gap-[16px]">
        <p className="flex items-center gap-[4px] underline">
          <span>
            <Svg cssClass="size-[16px]" iconName="empty-hearth" />
          </span>
          4.4(2 Reviews)
        </p>

        <p className="flex items-center gap-[4px]">
          <span>
            <Svg cssClass="size-[16px]" iconName="empty-hearth" />
          </span>
          Kyiv, Ukraine
        </p>
      </div>

      <h2 className="font-semibold text-2xl">€8000.00</h2>
    </div>
  );
}

export default TruckInfo;
