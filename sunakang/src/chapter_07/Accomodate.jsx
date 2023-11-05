import React, {useState, useEffect} from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accomodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  // 컴포넌트가 업데이트될 때마다 호출
  useEffect(() => {
    console.log("==================");
    console.log("useEffect() is called.");
    console.log(`isFull: ${isFull}`);
  });

  // cout 값이 바뀔 때마다 호출
  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value: ${count}`);
  }, [count]);

  return (
    <div style={{padding: 16}}>
      <p>{`총 ${count}명 수용했습니다.`}</p>
      <button onClick={increaseCount} disabled={isFull}>
        입장
      </button>
      <button onClick={decreaseCount}>퇴장</button>

      {isFull && <p style={{color: "red"}}>정원이 가득 찼습니다.</p>}
    </div>
  );
}

export default Accomodate;
