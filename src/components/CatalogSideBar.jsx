import LocationInput from "../components/LocationInput";
import FilterBox from "../components/FilterBox";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import useFetchAndDispatch from "../hooks/useFetchAndDispatch";

function CatalogSideBar() {
  const filterObj = useSelector((state) => state.filter);
  const fetchAndDispatch = useFetchAndDispatch();

  function handleSearch() {
    fetchAndDispatch(filterObj);
  }

  return (
    <aside className="flex flex-col gap-5 md:gap-10">
      <div>
        <LocationInput />
      </div>
      <div className="flex flex-col gap-2 md:gap-8">
        <h2 className="text-[#10182899]">Filters</h2>

        <div>
          <h3 className="text-[#101828] text-lg md:text-xl font-semibold">
            Vehicle equipment
          </h3>
          <div className="border-b border-[#DADDE1] my-2 md:my-6"></div>

          <ul className="flex flex-wrap gap-1 md:gap-3">
            <FilterBox
              iconName="ac"
              text="AC"
              filterName="ac"
              filterValue="true"
            />
            <FilterBox
              iconName="automatic"
              text="Automatic"
              filterName="transmission"
              filterValue="automatic"
            />
            <FilterBox
              iconName="kitchen"
              text="Kitchen"
              filterName="kitchen"
              filterValue="true"
            />
            <FilterBox
              iconName="tv"
              text="TV"
              filterName="tv"
              filterValue="true"
            />
            <FilterBox
              iconName="bathroom"
              text="Bathroom"
              filterName="bathroom"
              filterValue="true"
            />
          </ul>
        </div>

        <div>
          <h3 className="text-[#101828] text-lg md:text-xl font-semibold">
            Vehicle type
          </h3>
          <div className="border-b border-[#DADDE1] my-2 md:my-6"></div>

          <ul className="flex flex-wrap gap-2 md:gap-3">
            <FilterBox
              iconName="van"
              text="Van"
              filterName="form"
              filterValue="van"
            />
            <FilterBox
              iconName="fully-integrated"
              text="Fully Integrated"
              filterName="form"
              filterValue="fullyIntegrated"
            />
            <FilterBox
              iconName="alcove"
              text="Alcove"
              filterName="form"
              filterValue="alcove"
            />
          </ul>
        </div>

        <Button
          text="Search"
          cssClass="self-start bg-[#E44848] text-[#FFFF]"
          onClick={handleSearch}
        />
      </div>
    </aside>
  );
}

export default CatalogSideBar;
