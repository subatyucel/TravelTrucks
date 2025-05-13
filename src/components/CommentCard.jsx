import Svg from "./Svg";

function CommentCard({ review }) {
  const maxReview = [1, 2, 3, 4, 5];

  return (
    <li className="flex flex-col gap-[16px]">
      <div className="flex gap-[16px] items-center">
        <p className="bg-[#F2F4F7] rounded-full size-[60px] p-[15px] flex items-center justify-center text-[#E44848] font-semibold text-2xl">
          {review.reviewer_name[0]}
        </p>

        <div>
          <p>{review.reviewer_name}</p>
          <ul className="flex gap-[4px]">
            {maxReview.map((_, i) =>
              i + 1 <= review.reviewer_rating ? (
                <li key={`filled-${i}`}>
                  <Svg iconName="filled-star" cssClass="size-[16px]" />
                </li>
              ) : (
                <li key={`empty-${i}`}>
                  <Svg iconName="empty-star" cssClass="size-[16px]" />
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      <p className="text-[#475467]">{review.comment}</p>
    </li>
  );
}

export default CommentCard;
