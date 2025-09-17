import Navigation from "../components/Navigation";
import FeatureBox from "../components/FeatureBox";
import toast, { Toaster } from "react-hot-toast";
import TruckInfo from "../components/TruckInfo";
import TruckImage from "../components/TruckImage";
import TruckDetailList from "../components/TruckDetailList";
import BookForm from "../components/BookForm";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import { HashLoader } from "react-spinners";
import CommentCard from "../components/CommentCard";

function TrackDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [truck, setTruck] = useState(null);
  const keys = truck ? Object.keys(truck) : [];
  const [status, setStatus] = useState("details");

  useEffect(() => {
    const fetchTruck = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance(`/${id}`);
        setTruck(res.data);
      } catch (e) {
        toast.error(e.response.data);
        navigate("/catalog");
      } finally {
        setLoading(false);
      }
    };

    fetchTruck();
  }, [id, navigate]);

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
      <div className="flex flex-col gap-11 md:gap-14.5 py-6 px-8 md:py-12 md:px-16 ">
        <div className="flex flex-col gap-7">
          <TruckInfo truck={truck} />
          <ul className="flex flex-wrap gap-12 justify-center lg:justify-start">
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

        <div className="flex gap-10">
          <h3
            onClick={() => setStatus("details")}
            className={`pb-3 md:pb-6 cursor-pointer ${
              status === "details"
                ? "border-[#E44848] border-b-3 md:border-b-5"
                : ""
            }`}
          >
            Features
          </h3>
          <h3
            onClick={() => setStatus("comments")}
            className={`pb-3 md:pb-6cursor-pointer ${
              status === "comments"
                ? "border-[#E44848] border-b-3 md:border-b-5"
                : ""
            }`}
          >
            Reviews
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 ">
          {status === "details" && (
            <div className="py-5 px-5 md:py-11 md:px-12.5 bg-[#F7F7F7] w-full rounded-xl flex flex-col gap-5">
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
            <div className="min-w-0 py-5 px-5 md:py-11 md:px-12.5 w-full rounded-xl flex flex-col gap-[100px]">
              <ul className="flex flex-col gap-[44px]">
                {truck.reviews.map((r) => (
                  <CommentCard key={`${r.comment}`} review={r} />
                ))}
              </ul>
            </div>
          )}

          <div className="min-w-0 border border-[#DADDE1] w-full rounded-xl py-5 px-5 md:py-11 md:px-14.5">
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
