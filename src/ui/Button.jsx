import { Link } from "react-router-dom";

function Button({ children, disabled, to, type ,onClick}) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";
  const styles = {
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    small: base + "py-2 px-4 md:px-5 md:py-2.5 text-xs",
    secondary:
      "inline-block text-sm rounded-full bg-transparent border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors hover:bg-stone-800 hover:text-stone-100 focus:bg-stone-300 focus:outline-none focus:text-stone-800 focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed border-2 px-4 py-2.5 md:px-6 md:py-3.5",
    round: base + "py-1 px-2.5 md:px-2.5 md:py-1 text-sm",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
    if(onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
