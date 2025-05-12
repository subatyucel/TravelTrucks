import Navigation from "../components/Navigation";
import Svg from "../components/Svg";
import FeatureBox from "../components/FeatureBox";
import { formInitials } from "../utils/formInitials";
import { formSchema } from "../utils/formSchema";
import toast, { Toaster } from "react-hot-toast";
import { Formik, Field, Form, ErrorMessage } from "formik";

function TrackDetailsPage() {
  return (
    <>
      <Navigation />
      <Toaster />
      <div className="flex flex-col gap-[60px] py-[48px] px-[64px] ">
        <div className="flex flex-col gap-[28px]">
          <div className="flex flex-col gap-[16px]">
            <h1 className="text-[#101828] text-2xl font-semibold">Mavericks</h1>

            <div className="flex items-center gap-[16px]">
              <p className="flex items-center gap-[4px] underline">
                <span>
                  <Svg cssClass="size-[16px]" iconName="empty-hearth" />
                </span>
                4.4(2 Reviews)
              </p>

              <p className="flex items-center gap-[4px]">
                <span>
                  <Svg cssClass="size-[16px]" iconName="empty-hearth" />
                </span>
                Kyiv, Ukraine
              </p>
            </div>

            <h2 className="font-semibold text-2xl">€8000.00</h2>
          </div>

          <ul className="flex gap-[48px]">
            <li>
              <img
                src="https://ftp.goit.study/img/campers-test-task/8-1.webp"
                alt=""
                className="w-[292px] h-[312px] object-cover object-left rounded-lg"
              />
            </li>
            <li>
              <img
                src="https://ftp.goit.study/img/campers-test-task/8-1.webp"
                alt=""
                className="w-[292px] h-[312px] object-cover object-left rounded-lg"
              />
            </li>
            <li>
              <img
                src="https://ftp.goit.study/img/campers-test-task/8-1.webp"
                alt=""
                className="w-[292px] h-[312px] object-cover object-left rounded-lg"
              />
            </li>
            <li>
              <img
                src="https://ftp.goit.study/img/campers-test-task/8-1.webp"
                alt=""
                className="w-[292px] h-[312px] object-cover object-left rounded-lg"
              />
            </li>
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
              <FeatureBox text="Automatic" iconName="automatic" />
              <FeatureBox text="Automatic" iconName="automatic" />
              <FeatureBox text="Automatic" iconName="automatic" />
              <FeatureBox text="Automatic" iconName="automatic" />
            </ul>

            <div>
              <h3 className="text-[#101828] text-xl font-semibold">
                Vehicle details
              </h3>
              <div className="border-b border-[#DADDE1] my-[24px]"></div>

              <ul className="flex flex-col gap-[16px]">
                <li className="flex justify-between font-medium">
                  Form <span>Panel Truck</span>
                </li>

                <li className="flex justify-between font-medium">
                  Length <span>Panel Truck</span>
                </li>

                <li className="flex justify-between font-medium">
                  Width <span>Panel Truck</span>
                </li>

                <li className="flex justify-between font-medium">
                  Height <span>Panel Truck</span>
                </li>

                <li className="flex justify-between font-medium">
                  Tank <span>Panel Truck</span>
                </li>

                <li className="flex justify-between font-medium">
                  Consumption <span>Panel Truck</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border border-[#DADDE1] w-[641px] rounded-xl py-[44px] px-[57px]">
            <div>
              <h3 className="text-[#101828] font-semibold font-xl">
                Book your campervan now
              </h3>
              <p className="text-[#475467]">
                Stay connected! We are always ready to help you.
              </p>
              <Formik
                initialValues={formInitials}
                onSubmit={() => toast.success("Successfully booked!")}
                validationSchema={formSchema}
              >
                <Form>
                  <Field id="name" name="name" placeholder="Name*" />
                  <ErrorMessage name="name" component="div" />

                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email*"
                  />
                  <ErrorMessage name="email" component="div" />

                  <Field name="bookingDate" id="bookingDate" type="date" />
                  <ErrorMessage name="bookingDate" component="div" />

                  <Field id="comment" name="comment" placeholder="Comment" />
                  <ErrorMessage name="comment" component="div" />
                  <button type="submit">Gönder</button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrackDetailsPage;
