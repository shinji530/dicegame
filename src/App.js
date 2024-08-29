import { useState } from "react";
import Button from "./Button";
import Board from "./Board";

function randomNum(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  // num, sum은 records로부터 계산 가능하므로 삭제
  const [myRecords, setMyRecord] = useState([]);
  const [yourRecords, setYourRecord] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = randomNum(6);
    const nextYourNum = randomNum(6);
    const newMyRecords = [...myRecords, nextMyNum];
    const newYourRecords = [...yourRecords, nextYourNum];
    setMyRecord(newMyRecords);
    setYourRecord(newYourRecords);
  }

  const handleClearClick = () => {
    setMyRecord([]);
    setYourRecord([]);
  }

  return (
    <div className="App">
      <div>
        <Button className="App-button" color="blue" onClick={handleRollClick}>던지기</Button>
        <Button className="App-button" color="red" onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <Board name="나" color="blue" records={myRecords} />
        <Board name="너" color="red" records={yourRecords} />
      </div>
    </div>
  );
}

export default App;