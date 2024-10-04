import styled from "styled-components";
import { TButtonProps } from "./button.type";

const SCButton = styled.button<TButtonProps>`
  background-color: ${(props) => props.variant};
  color: white;
  border: none;
  padding: 10px 1rem;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const Button = ({ ...props }: TButtonProps) => {
  return <SCButton {...props} />;
};

export default Button;
