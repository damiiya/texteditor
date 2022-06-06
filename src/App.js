import React from "react";
import "./App.css";
import { TextArea, Input, CompleteBtn } from "./Edit";
import useState from "./useCompletes.js";

function App() {
  // input 태그에 찍히는 값을 관리하기 위해 부모 컴포넌트에서 작업함
  const [text, setText] = useCompletes("");
  const input_ref = React.useRef(null);
  return (
    <div className="App" style={{ display: "flex", gap: 10 }}>
      <div>
        <TextArea text={text} />
      </div>
      <div>
        <Input input_ref={input_ref} />
        <CompleteBtn setText={setText} input_ref={input_ref} />
      </div>
    </div>
  );
}

export default App;
