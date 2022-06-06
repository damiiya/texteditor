import React from "react";

// 각 컴포넌트 마다 필요한 props를 넘겨 받음
export const TextArea = ({ text }) => {
  return (
    <div style={{ width: "50vw", border: "1px solid #888", minHeight: "20vh" }}>
      <pre>{text}</pre>
    </div>
  );
};

export const CompleteBtn = ({ input_ref, setText }) => {
  return (
    <button
      onClick={() => {
        setText(input_ref.current.value);
        input_ref.current.value = "";
      }}
    >
      완성
    </button>
  );
};

export const Input = ({ input_ref }) => {
  return <input ref={input_ref} />;
};
