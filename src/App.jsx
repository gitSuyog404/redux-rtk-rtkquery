import Todo from "./todo";
import apiSlice from "./store/apiSlice";
import { useEffect } from "react";

function App() {
  // to prefetch in components inside providers
  const getTodoFn = apiSlice.usePrefetch("getTodo");
  useEffect(() => {
    getTodoFn(2);
  }, []);
  return (
    <>
      <div>
        <Todo />
      </div>
    </>
  );
}

export default App;
