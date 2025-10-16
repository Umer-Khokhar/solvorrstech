import Link from "next/link"
import { ButtonSvg } from "../assets/svg";

const Button = ({ className, onClick, children, px, href, white }) => {
  const classes = `button relative inline-flex item-center justify-center h-11 transition-color hover:text-color-1 ${
    px || "px-6"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const renderButton = () => (
    <button className={`${classes} z-2 items-center transition-all`} onClick={onClick}>
      <span className="z-1">{children}</span>
      {ButtonSvg(white)}
    </button>
  );
  const renderLink = () => (
    <Link href={href} className={`${classes} items-center justify-center z-2 transition-all`} onClick={onClick}>
      <span className="z-1">{children}</span>
      {ButtonSvg(white)}
    </Link>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
