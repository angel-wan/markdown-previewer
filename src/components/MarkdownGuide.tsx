import styled from "styled-components";

const GuideContainer = styled.div`
  position: relative;
  background-color: #2a2b2e;
  color: white;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
`;

const GuideContent = styled.div`
  width: 100%;
  height: 300px;
  background-color: transparent;
  border-color: #d4af37;
  border-style: solid;
  margin: 20px;
  padding: 20px;
`;

const MarkdownGuide = () => {
  const guideItem = [
    "# H1",
    "## H2",
    "### H3",
    "**bold**",
    "*italic*",
    "[Link](http://a.com)",
    "![Image](http://url/a.png)",
    "`inline code`",
    "```block code```",
    "- list item",
  ];
  return (
    <GuideContainer>
      <GuideContent>
        Markdown Cheat Sheet
        <ul>
          {guideItem.map((item) => (
            <li>
              <code>{item}</code>
            </li>
          ))}
        </ul>
        <code></code>
      </GuideContent>
    </GuideContainer>
  );
};

export default MarkdownGuide;
