import { useDispatch, useSelector } from "react-redux";
import FeatureBox from "./FeatureBox";
import LinkButton from "./LinkButton";
import Svg from "./Svg";
import { toggleFavorite } from "../redux/favouriteSlice";

function calculateAvgRating(reviews) {
  if (!reviews || reviews.length === 0) return 0;
  const total = reviews.reduce(
    (sum, review) => sum + review.reviewer_rating,
    0
  );

  return total / reviews.length;
}

function TruckCard({ truck }) {
  const keys = Object.keys(truck);
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favourite.items);
  const isFav = favs.includes(truck.id);

  function handleFav(e) {
    dispatch(toggleFavorite(e.currentTarget.dataset.id));
  }

  return (
    <li className="border border-[#DADDE1] p-4 md:p-6  rounded-lg w-full max-w-full   ">
      <div className="flex flex-col lg:flex-row gap-6 max-w-full w-full ">
        <img
          src={truck.gallery[0].thumb}
          alt=""
          className="lg:w-[292px] lg:h-[320px] object-cover object-left rounded-lg"
        />

        <div className="flex-1 min-w-0 flex flex-col gap-6 items-start ">
          <div className="flex justify-between gap-4 w-full">
            <h2 className="font-semibold  md:text-xl lg:text-2xl truncate min-w-0">
              {truck.name}
            </h2>
            <div
              className="flex items-center gap-3 flex-shrink-0"
              data-id={truck.id}
              onClick={handleFav}
            >
              <h2 className="font-semibold md:text-xl lg:text-2xl">
                €{truck.price.toFixed(2)}
              </h2>
              <Svg
                cssClass="size-4 lg:size-6 cursor-pointer"
                iconName={`${isFav ? "filled-hearth" : "empty-hearth"}`}
              />
            </div>
          </div>
          <div className="flex items-center gap-4 w-full justify-between ">
            <div className="flex items-center gap-1 ">
              <Svg cssClass="size-3 md:size-4" iconName="filled-star" />

              <p className="text-sm md:text-base">
                {calculateAvgRating(truck.reviews)}({truck.reviews.length}
                Reviews)
              </p>
            </div>

            <div className="flex items-center gap-1">
              <Svg cssClass="size-3 md:size-4" iconName="map" />
              <p className="text-sm md:text-base">{truck.location}</p>
            </div>
          </div>
          <p className="truncate min-w-0 w-full">{truck.description}</p>

          <div>
            <ul className="flex flex-wrap gap-2">
              {keys.map((key) =>
                truck[key] === true ? (
                  <FeatureBox
                    text={key[0].toUpperCase() + key.slice(1)}
                    iconName={key.toLowerCase()}
                    key={key}
                  />
                ) : (
                  ""
                )
              )}

              <FeatureBox text="Automatic" iconName="automatic" />
            </ul>
          </div>

          <LinkButton to={truck.id} text="Show more" type="Link" />
        </div>
      </div>
    </li>
  );
}

export default TruckCard;
