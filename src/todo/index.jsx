import { useState } from "react";

import TodoList from "./todo-list";

export default function Todo() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  function handleToggle() {
    setShow(!show);
  }
  // useEffect(() => {
  //   setIsLoading(true);
  //   axios
  //     .get("https://dummyjson.com/todos")
  //     .then((response) => {
  //       setData(response?.data?.todos);
  //     })
  //     .catch((error) => {
  //       console.log("Error");
  //       setError("Error Occurred");
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);
  // if (isLoading) {
  //   return (
  //     <div>
  //       <h1>Data is loading</h1>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div>
  //       <h1>Error Occurred</h1>
  //     </div>
  //   );
  // }
  return (
    <div>
      {show && <TodoList />}
      <button onClick={handleToggle}>Toggle TodoList</button>
    </div>
  );
}

// 15:50
