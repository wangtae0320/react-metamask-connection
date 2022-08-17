import React from "react";
import styled from "styled-components";

interface IButtonProps {
  children?: React.ReactNode;
  props?: any;
  onClick?: any;
  style?: any;
}

const Button: React.FC<IButtonProps> = ({ style, onClick, children, ...props }) => {
  return (
    <StyledButton {...props} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  margin: 0;
  border: none;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 8px);
  background: var(--button-bg-color, #0d6efd);
  color: var(--button-color, #ffffff);

  &:active,
  &:hover,
  &:focus {
    background: var(--button-hover-bg-color, #025ce2);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
  }
`;
