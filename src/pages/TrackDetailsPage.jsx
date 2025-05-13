import Navigation from "../components/Navigation";
import FeatureBox from "../components/FeatureBox";
import toast, { Toaster } from "react-hot-toast";
import TruckInfo from "../components/TruckInfo";
import TruckImage from "../components/TruckImage";
import TruckDetailList from "../components/TruckDetailList";
import BookForm from "../components/BookForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import { HashLoader } from "react-spinners";
import CommentCard from "../components/CommentCard";

function TrackDetailsPage() {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [truck, setTruck] = useState(null);
  const keys = truck ? Object.keys(truck) : [];
  const [status, setStatus] = useState("comments");

  useEffect(() => {
    const fetchTruck = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance(`/${params.id}`);
        setTruck(res.data);
      } catch (e) {
        console.log(e);
        toast.error(e.response.data);
      } finally {
        setLoading(false);
      }
    };

    fetchTruck();
  }, [params.id]);

  if (loading || !truck)
    return (
      <HashLoader
        color="#E44848"
        size="150px"
        cssOverride={{ width: "100vw", height: "100vh" }}
      />
    );

  return (
    <>
      <Navigation />
      <Toaster />
      <div className="flex flex-col gap-[60px] py-[48px] px-[64px] ">
        <div className="flex flex-col gap-[28px]">
          <TruckInfo truck={truck} />

          <ul className="flex gap-[48px]">
            {truck.gallery.map((g) => (
              <TruckImage url={g.original} key={g.thumb} alt={truck.name} />
            ))}

            <TruckImage
              url={truck.gallery[0].original}
              key={truck.gallery[0].original}
              alt={truck.name}
            />
          </ul>

          <p className="text-[#475467]">{truck.description}</p>
        </div>

        <div className="flex gap-[40px]">
          <h3
            onClick={() => setStatus("details")}
            className={`pb-[24px] ${
              status === "details" ? "border-[#E44848] border-b-[5px]" : ""
            }`}
          >
            Features
          </h3>
          <h3
            onClick={() => setStatus("comments")}
            className={`pb-[24px] ${
              status === "comments" ? "border-[#E44848] border-b-[5px]" : ""
            }`}
          >
            Reviews
          </h3>
        </div>

        <div className="flex gap-[40px]">
          {status === "details" && (
            <div className="py-[44px] px-[52px] bg-[#F7F7F7] w-[631px] rounded-xl flex flex-col gap-[100px]">
              <ul className="flex gap-[8px] flex-wrap">
                {keys.map((key) =>
                  truck[key] === true ? (
                    <FeatureBox
                      text={key[0].toUpperCase() + key.slice(1)}
                      iconName={key.toLowerCase()}
                      key={key}
                    />
                  ) : null
                )}
              </ul>

              <div>
                <h3 className="text-[#101828] text-xl font-semibold">
                  Vehicle details
                </h3>
                <div className="border-b border-[#DADDE1] my-[24px]"></div>

                <TruckDetailList truck={truck} />
              </div>
            </div>
          )}
          {status === "comments" && (
            <div className="py-[44px] px-[52px] w-[631px] rounded-xl flex flex-col gap-[100px]">
              <ul className="flex flex-col gap-[44px]">
                {truck.reviews.map((r) => (
                  <CommentCard key={`${r.comment}`} review={r} />
                ))}
              </ul>
            </div>
          )}

          <div className="border border-[#DADDE1] w-[641px] rounded-xl py-[44px] px-[57px]">
            <div className="flex flex-col gap-[24px]">
              <div>
                <h3 className="text-[#101828] font-semibold font-xl">
                  Book your campervan now
                </h3>
                <p className="text-[#475467]">
                  Stay connected! We are always ready to help you.
                </p>
              </div>
              <BookForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrackDetailsPage;
