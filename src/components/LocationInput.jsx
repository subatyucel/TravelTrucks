import { useState } from "react";
import Svg from "./Svg";
import { useDispatch } from "react-redux";
import { updateFilters } from "../redux/filterSlice";

function LocationInput() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(updateFilters({ location: e.target.value }));
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="location" className="text-[#10182899]">
        Location
      </label>
      <div className="flex gap-[8px] items-center py-[18px] px-[20px] bg-[#F7F7F7] rounded-xl">
        <Svg cssClass="size-[20px]" iconName="map" />
        <input
          value={value}
          onChange={handleChange}
          type="text"
          name="location"
          id="location"
          className="placeholder:text-[#101828] focus:outline-none"
          placeholder="Enter a location"
        />
      </div>
    </div>
  );
}

export default LocationInput;
