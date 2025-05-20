function Button({ text, onClick, cssClass, type }) {
  cssClass = cssClass ? cssClass : "";

  return (
    <button
      type={type || "submit"}
      className={`rounded-full px-[40px] py-[16px] cursor-pointer ${cssClass}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
