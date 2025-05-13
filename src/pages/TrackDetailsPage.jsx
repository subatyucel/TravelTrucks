import Navigation from "../components/Navigation";
import FeatureBox from "../components/FeatureBox";
import { Toaster } from "react-hot-toast";
import TruckInfo from "../components/TruckInfo";
import TruckImage from "../components/TruckImage";
import TruckDetailList from "../components/TruckDetailList";
import BookForm from "../components/BookForm";

function TrackDetailsPage() {
  return (
    <>
      <Navigation />
      <Toaster />
      <div className="flex flex-col gap-[60px] py-[48px] px-[64px] ">
        <div className="flex flex-col gap-[28px]">
          <TruckInfo />

          <ul className="flex gap-[48px]">
            <TruckImage />
          </ul>

          <p className="text-[#475467]">
            Embrace simplicity and freedom with the Mavericks panel truck, an
            ideal choice for solo travelers or couples seeking a compact and
            efficient way to explore the open roads. This no-frills yet reliable
            panel truck offers the essentials for a comfortable journey, making
            it the perfect companion for those who value simplicity and
            functionality.
          </p>
        </div>

        <div className="flex gap-[40px]">
          <h3 className="pb-[24px] border-b-[5px] border-[#E44848]">
            Features
          </h3>
          <h3 className="pb-[24px] border-b-[5px] border-[#E44848]">Reviews</h3>
        </div>

        <div className="flex gap-[40px]">
          <div className="py-[44px] px-[52px] bg-[#F7F7F7] w-[631px] rounded-xl flex flex-col gap-[100px]">
            <ul className="flex gap-[8px] flex-wrap">
              <FeatureBox text="Automatic" iconName="automatic" />
            </ul>

            <div>
              <h3 className="text-[#101828] text-xl font-semibold">
                Vehicle details
              </h3>
              <div className="border-b border-[#DADDE1] my-[24px]"></div>

              <TruckDetailList />
            </div>
          </div>

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
