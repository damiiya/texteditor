import React from "react";

// 함수명은 무조건 use가 앞에 붙어야 함
// 컴포넌트 최상위에서만 호출 가능
// return은 꼭!!! 해줘야 함

// (파라미터로 가져올 것 = "가져오지 못할 땐 그냥 비워둬")
const useCompletes = (initial = "") => {
  // ref값 가져온 걸로!
  // state를 바꿔주자!
  const [text, setText] = React.useState(initial);

  const changeText = (_ref) => {
    // const value = _ref.current?.value;
    const value = _ref.current ? _ref.current.value : "";

    if (value && value !== "") {
      setText(value);
      _ref.current.value = "";
    }
  };

  return [text, changeText];
};

export default useCompletes;
