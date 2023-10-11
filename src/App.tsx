import { SetStateAction, useState } from "react";
import Header from "./components/Header";
import MarkdownGuide from "./components/MarkdownGuide";
import MarkdownContainer from "./components/MarkdownContainer";

function App() {
  const [markdown, setMarkdown] = useState(`# Hello World`);
  const [showGuide, setShowGuide] = useState(false);

  const onToggleGuide = () => {
    setShowGuide(!showGuide);
  };

  const handleMarkdownChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setMarkdown(event.target.value);
  };
  return (
    <>
      <header>
        <Header onToggleGuide={onToggleGuide} />
      </header>
      {showGuide && <MarkdownGuide />}
      <MarkdownContainer
        markdown={markdown}
        onInputChange={handleMarkdownChange}
      />
    </>
  );
}

export default App;
