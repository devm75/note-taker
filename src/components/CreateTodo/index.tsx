import { createTodo } from "@/src/services";
import React, { useState } from "react";
export const CreateTodo = ({ userId }: { userId: string }): React.ReactNode => {
  const [todoVal, setTodoVal] = useState("");

  const handleChange = (e: any) => {
    setTodoVal(e.target.value);
  };
  const handleSubmit = async (e: any) => {
    e?.preventDefault();

    const response = await createTodo({ title: todoVal, user: userId });
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <button type="submit">Create Todo</button>
    </form>
  );
};
