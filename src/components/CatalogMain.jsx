import { useSelector } from "react-redux";
import TruckCard from "../components/TruckCard";
import { HashLoader } from "react-spinners";

function CatalogMain() {
  const { truckList, loading } = useSelector((state) => state.truck);

  return (
    <main>
      {loading && (
        <HashLoader
          color="#E44848"
          size="150px"
          cssOverride={{ width: "60vw" }}
        />
      )}

      <ul className="flex flex-col gap-[32px]">
        {truckList.length < 1 && !loading ? (
          <h2>No truck found with this filters</h2>
        ) : (
          truckList.map((truck) => <TruckCard truck={truck} key={truck.id} />)
        )}
      </ul>
    </main>
  );
}

export default CatalogMain;
