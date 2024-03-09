import { useState } from "react";

export default function Counter() {
  const defaultValue = 0;
  const [num, setNum] = useState(defaultValue);
  const handeAdd = () => {
    const newCount = num + 1;
    setNum(newCount);
  };
  const handleDecrease = () => {
    const decreaseNum = num - 1;
    setNum(decreaseNum);
  };
  return (
    <div className="flex items-center justify-center flex-col">
      <h2 className="text-4xl">
        Counter:{" "}
        <span className="text-5xl text-blue-700 font-extrabold">{num}</span>
      </h2>
      <button
        onClick={() => {
          handeAdd();
        }}
        className="btn btn-info"
      >
        Count
      </button>
      <button
        onClick={() => {
          handleDecrease();
        }}
        className="btn btn-info mt-5"
      >
        decrease
      </button>
    </div>
  );
}
