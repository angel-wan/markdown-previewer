import { ReactElement } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  font-size: 40px;
  background-color: #848482;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h4`
  color: white;
  margin-left: 1em;
`;

const Button = styled.button`
  background-color: #d4af37;
  margin-right: 1em;
  color: #2a2b2e;
  align-items: center;
  font-size: 16px;
  padding: 14px;
  text-align: center;
  display: grid;
  border-color: #d4af37;
  border-style: soild;
  outline: none;

  &: hover {
    background-color: #bd9d36;
    border-color: #bd9d36;
    outline: none;
  }
  &: active {
    outline: none;
  }
  &: focus {
    outline: none;
  }
`;
const Header = ({
  onToggleGuide,
}: {
  onToggleGuide: () => void;
}): ReactElement => {
  return (
    <HeaderContainer>
      <Title>Markdown Previewer</Title>
      <Button onClick={onToggleGuide}>Markdown Cheat Sheet</Button>
    </HeaderContainer>
  );
};

export default Header;
