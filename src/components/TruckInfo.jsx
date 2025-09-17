import Svg from "../components/Svg";

function TruckInfo({ truck }) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[#101828] text-lg md:text-2xl font-semibold">
        {truck.name}
      </h1>

      <div className="flex items-center gap-2 md:gap-4">
        <p className="flex text-sm md:text-base items-center gap-1 underline">
          <span>
            <Svg cssClass="size-3 md:size-4" iconName="filled-star" />
          </span>
          {`${truck.rating}(${truck.reviews.length} Reviews)`}
        </p>

        <p className="flex items-center gap-1 text-sm md:text-base">
          <span>
            <Svg cssClass="size-3 md:size-4" iconName="map" />
          </span>
          {truck.location}
        </p>
      </div>

      <h2 className="font-semibold text-lg md:text-2xl">
        €{truck.price.toFixed(2)}
      </h2>
    </div>
  );
}

export default TruckInfo;
