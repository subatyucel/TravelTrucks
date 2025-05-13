import { useEffect } from "react";
import CatalogMain from "../components/CatalogMain";
import CatalogSideBar from "../components/CatalogSideBar";
import Navigation from "../components/Navigation";
import { Toaster } from "react-hot-toast";
import useFetchAndDispatch from "../hooks/useFetchAndDispatch";

function CatalogPage() {
  const fetchAndDispatch = useFetchAndDispatch();

  useEffect(() => {
    const fetchAndDispatchTrukcs = async () => {
      await fetchAndDispatch();
    };
    fetchAndDispatchTrukcs();
  }, [fetchAndDispatch]);

  return (
    <>
      <Toaster />
      <Navigation />
      <div className="flex gap-[64px] py-[48px] px-[64px]">
        <CatalogSideBar />
        <CatalogMain />
      </div>
    </>
  );
}

export default CatalogPage;
