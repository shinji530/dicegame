import { useState } from "react";
import Button from "./Button";
import Dice from "./Dice";

function randomNum(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = useState(1);
  const [sum, setSum] = useState(0);
  const [records, setRecord] = useState([]);

  const handleRollClick = () => {
    const nextNum = randomNum(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    const newRecords = [...records, nextNum];
    setRecord(newRecords);
  }

  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setRecord([]);
  }

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <h2>나</h2>
      <Dice num={num} />
      <h2>총점</h2>
      <p>{sum}</p>
      <h2>기록</h2>
      {records.join(', ')}
    </div>
  );
}

export default App;