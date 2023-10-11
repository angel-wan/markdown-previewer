import { ReactElement } from "react";
import styled from "styled-components";
import MarkdownInput from "./MarkdownInput";
import MarkdownOutput from "./MarkdownOutput";

const MarkdownContent = styled.div`
  position: relative;
  background-color: #2a2b2e;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
`;

interface MarkdownProps {
  markdown: string;
  onInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MarkdownContainer = ({
  markdown,
  onInputChange,
}: MarkdownProps): ReactElement => {
  return (
    <MarkdownContent>
      <MarkdownInput value={markdown} onChange={onInputChange} />
      <MarkdownOutput markdown={markdown} />
    </MarkdownContent>
  );
};

export default MarkdownContainer;
