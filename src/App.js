import "./App.css";
import react from "react";
import { marked } from "marked";

function App() {
  const [editorText, setEditorText] = react.useState("");

  return (
    <div className="App">
      <div>
        <header className="header-text">Editor</header>
        <textarea
          className="text-box"
          onChange={(e) => setEditorText(e.target.value)}
          id="editor"
          value={editorText}
        ></textarea>
      </div>
      <div>
        <header className="header-text">Previewer</header>
        <div
          className="text-box"
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked.parse(editorText, {
              breaks: true,
              gfm: true,
            }),
          }}
        />
      </div>
    </div>
  );
}

export default App;
