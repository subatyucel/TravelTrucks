function Svg({ cssClass, iconName }) {
  return (
    <svg className={cssClass}>
      <use href={`/icons.svg#icon-${iconName}`} />
    </svg>
  );
}

export default Svg;
