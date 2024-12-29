import style from "./Button.module.css";

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, onClick, disabled }: ButtonType) => {
  return (
    <button className={style.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
