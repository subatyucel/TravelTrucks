function TruckImage({ url, alt }) {
  return (
    <li>
      <img
        src={url}
        alt={`${alt} image`}
        className="min-w-0 w-[292px] h-[312px] object-cover  rounded-lg"
      />
    </li>
  );
}

export default TruckImage;
