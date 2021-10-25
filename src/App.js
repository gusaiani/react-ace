import AceEditor from "react-ace";
import { Container } from "./App.styled";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

function handleChange(newValue) {
  console.log("change", newValue);
}

function handleCursorChange(e) {
  console.log("cursor change", e);
}

function App() {
  return (
    <Container>
      <AceEditor
        mode="javascript"
        theme="monokai"
        onChange={handleChange}
        onCursorChange={handleCursorChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        fontSize={18}
        setOptions={{
          minLines: 1,
          maxLines: 14,
          showLineNumbers: false
        }}
        showGutter={false}
        style={{
          width: 1000
        }}
      />
    </Container>
  );
}

export default App;
