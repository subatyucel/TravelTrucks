import LocationInput from "../components/LocationInput";
import FilterBox from "../components/FilterBox";
import Button from "../components/Button";

function CatalogSideBar() {
  return (
    <aside className="flex flex-col gap-[40px]">
      <div>
        <LocationInput />
      </div>
      <div className="flex flex-col gap-[32px]">
        <h2 className="text-[#10182899]">Filters</h2>

        <div>
          <h3 className="text-[#101828] text-xl font-semibold">
            Vehicle equipment
          </h3>
          <div className="border-b border-[#DADDE1] my-[24px]"></div>

          <ul className="flex flex-wrap gap-[12px]">
            <FilterBox />
            <FilterBox />
            <FilterBox />
            <FilterBox />
            <FilterBox />
          </ul>
        </div>

        <div>
          <h3 className="text-[#101828] text-xl font-semibold">Vehicle type</h3>
          <div className="border-b border-[#DADDE1] my-[24px]"></div>

          <ul className="flex flex-wrap gap-[12px]">
            <FilterBox />
            <FilterBox />
            <FilterBox />
          </ul>
        </div>

        <Button text="Search" cssClass="self-start bg-[#E44848] text-[#FFFF]" />
      </div>
    </aside>
  );
}

export default CatalogSideBar;
