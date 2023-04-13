import { Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, setCounter } from "./redux/counterSlice";

function App() {
  const counterState = useSelector((state) => state.counterState);
  const dispatch = useDispatch();
  console.log(">> counter State:", counterState);

  return (
    <div className="container py-3">
      <h1>REDUX TOOLKIT COUNTER</h1>
      <h2>{counterState.counter}</h2>
      <Button
        onClick={(event) => {
          dispatch(increase());
          //dispatch , datayı reduxa gönderir
        }}
        variant="success"
      >
        Arttır
      </Button>

      <Button
        onClick={(event) => {
          dispatch(decrease());
          //dispatch , datayı reduxa gönderir
        }}
        variant="info"
      >
        Azalt
      </Button>

      <Button
        onClick={(event) => {
          dispatch(setCounter(0));
          //counterSlice daki action.paylaoda primitiv bi değer(0) gönderir
        }}
        variant="danger"
      >
        Sıfırla
      </Button>
    </div>
  );
}

export default App;
