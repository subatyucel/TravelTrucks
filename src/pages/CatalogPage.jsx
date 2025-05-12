import CatalogMain from "../components/CatalogMain";
import CatalogSideBar from "../components/CatalogSideBar";
import Navigation from "../components/Navigation";

function CatalogPage() {
  return (
    <>
      <Navigation />
      <div className="flex gap-[64px] py-[48px] px-[64px]">
        <CatalogSideBar />
        <CatalogMain />
      </div>
    </>
  );
}

export default CatalogPage;
