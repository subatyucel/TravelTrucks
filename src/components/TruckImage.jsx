function TruckImage({ url, alt }) {
  return (
    <li>
      <img
        src={url}
        alt={`${alt} image`}
        className="w-[292px] h-[312px] object-cover  rounded-lg"
      />
    </li>
  );
}

export default TruckImage;
