import { getTodos } from "@/src/services";
import React, { useEffect, useState } from "react";

export const TodosList = () => {
  const [todosList, setTodosList] = useState([]);

  const fetchTodos = async () => {
    const response = getTodos();
    console.log(response);
  };
  useEffect(() => {}, []);
  return <div>index</div>;
};
