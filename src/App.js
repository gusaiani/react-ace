import AceEditor from "react-ace";
import { Container } from "./App.styled";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

function onChange(newValue) {
  console.log("change", newValue);
}

function App() {
  return (
    <Container>
      <AceEditor
        mode="javascript"
        theme="monokai"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        fontSize={18}
        setOptions={{
          enableBasicAutocomplete: true,
          minLines: 1,
          maxLines: 4,
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
