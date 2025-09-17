import Svg from "./Svg";

function CommentCard({ review }) {
  const maxReview = [1, 2, 3, 4, 5];

  return (
    <li className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <p className="bg-[#F2F4F7] rounded-full size-14.5 p-3.5 flex items-center justify-center text-[#E44848] font-semibold text-2xl">
          {review.reviewer_name[0]}
        </p>

        <div>
          <p>{review.reviewer_name}</p>
          <ul className="flex gap-1 ">
            {maxReview.map((_, i) =>
              i + 1 <= review.reviewer_rating ? (
                <li key={`filled-${i}`}>
                  <Svg iconName="filled-star" cssClass="size-3 md:size-4" />
                </li>
              ) : (
                <li key={`empty-${i}`}>
                  <Svg iconName="empty-star" cssClass="size-3 md:size-4" />
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      <p className="text-[#475467] text-sm md:text-base ">{review.comment}</p>
    </li>
  );
}

export default CommentCard;
