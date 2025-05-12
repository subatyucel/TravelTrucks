import TruckCard from "../components/TruckCard";

function CatalogMain() {
  return (
    <main>
      <ul className="flex flex-col gap-[32px]">
        <TruckCard />
      </ul>
    </main>
  );
}

export default CatalogMain;
