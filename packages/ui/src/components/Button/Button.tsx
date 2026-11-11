import type { ButtonHTMLAttributes } from "react";
import "./Button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style of the button */
  variant?: "primary" | "secondary" | "ghost";
  /** Size of the button */
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  type = "button",
  className,
  ...props
}: ButtonProps) {
  const classes = ["ds-button", `ds-button--${variant}`, `ds-button--${size}`, className]
    .filter(Boolean)
    .join(" ");
  return <button type={type} className={classes} {...props} />;
}
