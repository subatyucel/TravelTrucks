import Navigation from "../components/Navigation";
import Svg from "../components/Svg";

function TrackDetailsPage() {
  return (
    <>
      <Navigation />
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
      </div>
    </>
  );
}

export default TrackDetailsPage;
