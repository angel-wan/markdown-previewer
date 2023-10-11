import { ReactElement } from "react";
import Markdown from "react-markdown";
import styled from "styled-components";

const OutputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;
  height: calc(100vh - 140px);
  box-sizing: border-box;
  color: white;
`;

interface MarkdownOutputProps {
  markdown: string;
}

const MarkdownOutput = ({ markdown }: MarkdownOutputProps): ReactElement => {
  return (
    <OutputContainer>
      <Markdown>{markdown}</Markdown>
    </OutputContainer>
  );
};

export default MarkdownOutput;
