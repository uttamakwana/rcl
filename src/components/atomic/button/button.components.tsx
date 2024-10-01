import { forwardRef } from "react";
import { TButtonProps } from "./button.type";

const Button = forwardRef<HTMLButtonElement, TButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

export default Button;
