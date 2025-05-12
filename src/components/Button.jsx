function Button({ text, onClick, cssClass }) {
  cssClass = cssClass ? cssClass : "";

  return (
    <button
      className={`rounded-full px-[40px] py-[16px]  ${cssClass}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
