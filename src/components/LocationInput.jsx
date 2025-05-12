import Svg from "./Svg";

function LocationInput() {
  return (
    <div className="flex flex-col">
      <label htmlFor="location" className="text-[#10182899]">
        Location
      </label>
      <div className="flex gap-[8px] items-center py-[18px] px-[20px] bg-[#F7F7F7] rounded-xl">
        <Svg cssClass="size-[20px]" iconName="filled-hearth" />
        <input
          type="text"
          name="location"
          id="location"
          className="placeholder:text-[#101828]"
          placeholder="Enter a location"
        />
      </div>
    </div>
  );
}

export default LocationInput;
