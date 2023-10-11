import { ReactElement } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;
  font-size: 40px;
  width: 100%;
  height: calc(100vh - 140px);
  border-style: solid;
  border-color: transparent;
  border-right-color: #d4af37;
  box-sizing: border-box;
  display: flex;
`;

const StyledTextArea = styled.textarea`
  border-style: solid;
  border-color: #d4af37;
  margin-right: 20px;
  width: 100%;
  height: calc(100vh - 140px);
  background-color: transparent;
  color: white;
  box-sizing: border-box;
  padding: 20px;
  &: hover {
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

interface MarkdownInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MarkdownInput = ({
  value,
  onChange,
}: MarkdownInputProps): ReactElement => {
  return (
    <InputContainer>
      <StyledTextArea value={value} onChange={onChange} />
    </InputContainer>
  );
};

export default MarkdownInput;
