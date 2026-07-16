const Button = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) => {
  const variants = {
    primary:
      "bg-indigo-500 hover:bg-indigo-600 text-white",

    secondary:
      "bg-slate-100 hover:bg-slate-200 text-slate-700",

    danger:
      "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button
      type={type}
      className={`
        px-5
        py-2.5
        rounded-xl
        font-medium
        transition-all
        duration-200
        cursor-pointer
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;