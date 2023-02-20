import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  console.log("rendering counter");
  console.log("count", count);
  return (
    <div class="flex gap-2 w-full">
      <p class="flex-grow-1 font-bold text-xl">{count}</p>
      <Button onClick={() => setCount(count - 2)}>-1</Button>
      <Button onClick={() => setCount(count + 2)}>+1</Button>
    </div>
  );
}
