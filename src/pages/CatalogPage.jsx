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
      <div className="flex flex-col gap-9 py-6 px-8 md:flex-row md:gap-16 md:py-12 md:px-16">
        <CatalogSideBar />
        <CatalogMain />
      </div>
    </>
  );
}

export default CatalogPage;
