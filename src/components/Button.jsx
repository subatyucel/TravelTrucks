function Button({ text, onClick, cssClass, type }) {
  cssClass = cssClass ? cssClass : "";

  return (
    <button
      type={type || "submit"}
      className={`rounded-full px-5 py-2 md:px-10 md:py-4 cursor-pointer ${cssClass}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
