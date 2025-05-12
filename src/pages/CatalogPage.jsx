import { useEffect } from "react";
import CatalogMain from "../components/CatalogMain";
import CatalogSideBar from "../components/CatalogSideBar";
import Navigation from "../components/Navigation";
import axiosInstance from "../utils/axios";
import { useDispatch } from "react-redux";
import { setTruckList, setLoading } from "../redux/truckSlice";
import toast, { Toaster } from "react-hot-toast";

function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTrucks = async () => {
      try {
        dispatch(setLoading(true));
        const response = await axiosInstance.get();
        const trucks = response.data;

        dispatch(setTruckList(trucks.items));
      } catch (e) {
        toast.error(e.message);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchTrucks();
  }, [dispatch]);

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
