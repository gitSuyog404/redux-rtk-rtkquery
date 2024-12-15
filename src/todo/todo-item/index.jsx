import { useEffect } from "react";
import { useLazyGetTodoQuery } from "../../store/apiSlice";
import { useDeleteTodoMutation } from "../../store/deleteApiSlice";

export default function TodoRow({ todo }) {
  const { id, todo: name } = todo || {};
  const [trigger, result] = useLazyGetTodoQuery();
  const [deleteTodoFn, deleteResult] = useDeleteTodoMutation();

  useEffect(() => {
    if (deleteResult.isSuccess) {
      alert("todo deleteed");
    }
  }, [deleteResult.isSuccess]);

  function handleGetStatus() {
    trigger(id);
  }

  function getStatus(isCompleted) {
    let status = "Completed";
    if (!isCompleted) {
      status = "Pending...";
    }
    return status;
  }

  function handleDelete() {
    deleteTodoFn(id);
  }
  return (
    <div className="todo-row">
      <span>{name}</span>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleGetStatus}>Get Status</button>
      {result?.isLoading && <span>Loading status</span>}
      {result?.data?.id && getStatus(result?.data?.completed)}
      {result.isError && <span>{result?.error?.data?.message}</span>}
    </div>
  );
}
