import Svg from "../components/Svg";

function TruckInfo({ truck }) {
  return (
    <div className="flex flex-col gap-[16px]">
      <h1 className="text-[#101828] text-2xl font-semibold">{truck.name}</h1>

      <div className="flex items-center gap-[16px]">
        <p className="flex items-center gap-[4px] underline">
          <span>
            <Svg cssClass="size-[16px]" iconName="filled-star" />
          </span>
          {`${truck.rating}(${truck.reviews.length} Reviews)`}
        </p>

        <p className="flex items-center gap-[4px]">
          <span>
            <Svg cssClass="size-[16px]" iconName="map" />
          </span>
          Kyiv, Ukraine
        </p>
      </div>

      <h2 className="font-semibold text-2xl">€{truck.price.toFixed(2)}</h2>
    </div>
  );
}

export default TruckInfo;
