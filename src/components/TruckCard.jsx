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
    <li className="border border-[#DADDE1] p-[24px]  rounded-lg w-[888px]">
      <div className="flex  gap-[24px] w-[840px]">
        <img
          src={truck.gallery[0].thumb}
          alt=""
          className="w-[292px] h-[320px] object-cover object-left rounded-lg"
        />

        <div className="w-full flex flex-col gap-[24px] items-start ">
          <div className="flex justify-between self-stretch">
            <h2 className="font-semibold text-2xl">{truck.name}</h2>
            <div
              className="flex items-center gap-[12px]"
              data-id={truck.id}
              onClick={handleFav}
            >
              <h2 className="font-semibold text-2xl">
                €{truck.price.toFixed(2)}
              </h2>
              <Svg
                cssClass="size-[24px]"
                iconName={`${isFav ? "filled-hearth" : "empty-hearth"}`}
              />
            </div>
          </div>
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center gap-[4px]">
              <Svg cssClass="size-[16px]" iconName="filled-star" />

              <p>
                {calculateAvgRating(truck.reviews)}({truck.reviews.length}
                Reviews)
              </p>
            </div>

            <div className="flex items-center gap-[4px]">
              <Svg cssClass="size-[16px]" iconName="map" />
              <p>{truck.location}e</p>
            </div>
          </div>
          <p className="ellipsis">{truck.description}</p>

          <div>
            <ul className="flex flex-wrap gap-[8px]">
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
