import React, { useState, useEffect } from 'react';
import { CounterViewModel } from '../viewmodels/CounterViewModel';

interface CounterViewProps {}

const CounterView: React.FC<CounterViewProps> = () => {
  const viewModel = CounterViewModel.getInstance();
  const [count, setCount] = useState(viewModel.count);

  useEffect(() => {
    const observer = {
      update: (newCount: number) => {
        setCount(newCount);
      },
    };
    viewModel.subscribe(observer);

    // 컴포넌트 언마운트 시 Observer 해제
    return () => {
      viewModel.unsubscribe(observer);
    };
  }, [viewModel]);

  const handleIncrement = () => {
    viewModel.increment();
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default CounterView;