function TruckDetailList({ truck }) {
  return (
    <ul className="flex flex-col gap-[16px]">
      <li className="flex justify-between font-medium">
        Form <span>{truck.form[0].toUpperCase() + truck.form.slice(1)}</span>
      </li>

      <li className="flex justify-between font-medium">
        Length <span>{truck.length}</span>
      </li>

      <li className="flex justify-between font-medium">
        Width <span>{truck.width}</span>
      </li>

      <li className="flex justify-between font-medium">
        Height <span>{truck.height}</span>
      </li>

      <li className="flex justify-between font-medium">
        Tank <span>{truck.tank}</span>
      </li>

      <li className="flex justify-between font-medium">
        Consumption <span>{truck.consumption}</span>
      </li>
    </ul>
  );
}

export default TruckDetailList;
