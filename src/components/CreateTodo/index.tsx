import { createTodo } from "@/src/services";
import React, { useState } from "react";
import { AddTodoModal } from "../Modal";
export const CreateTodo = ({ userId }: { userId: string }): React.ReactNode => {
  const [todoVal, setTodoVal] = useState("");

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: any) => {
    setTodoVal(e.target.value);
  };
  const handleSubmit = async (e: any) => {
    e?.preventDefault();

    const response = await createTodo({ title: todoVal, user: userId });
    console.log(response);
  };

  return (
    <>
      {/* <input type="text" onChange={handleChange} /> */}
      <button onClick={() => setShowModal(true)}>Create Todo</button>
      {showModal && <AddTodoModal />}
    </>
  );
};
