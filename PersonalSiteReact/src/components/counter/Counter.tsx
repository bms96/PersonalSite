import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { increment, decrement, incrementByAmount } from "./counterSlice";

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  const [amount, setAmount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h2>Redux Toolkit + TypeScript Counter</h2>
      <h3>{count}</h3>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          Add Amount
        </button>
      </div>
    </div>
  );
};
