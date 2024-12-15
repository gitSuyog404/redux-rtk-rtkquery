import { useState } from "react";
import { useAddTodoMutation, useGetAllTodosQuery } from "../../store/apiSlice";
import TodoRow from "../todo-item";
export default function TodoList({ todos }) {
  const { data, isLoading, error, refetch } = useGetAllTodosQuery();
  const [enteredTodo, setEnteredTodo] = useState("");
  const [addTodo] = useAddTodoMutation();
  function handleInputChange(event) {
    setEnteredTodo(event.target.value);
  }

  function handleAddTodo() {
    setEnteredTodo("");
    addTodo({
      completed: false,
      userId: 123,
      todo: enteredTodo,
    });

    // Rtk suggests to do it like this by using unwrap()
    // .unwrap()
    // .then((data) => {
    //   console.log(data);
    //   refetch();
    // });

    // redux suggests not to use refetch like this

    // .then(() => {
    //   refetch();
    // });

    // But there is a better way to do this using Tag Types : Provides and Invalidate Tags
  }
  return (
    <>
      <div className="todo-card">
        <div>
          <input
            onChange={handleInputChange}
            value={enteredTodo}
            placeholder="Enter Todo..."
            type="text"
          />
          <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        {data?.map((todo) => {
          return <TodoRow key={todo?.id} todo={todo} />;
        })}
      </div>
    </>
  );
}
