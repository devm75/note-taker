import { getTodos } from "@/src/services";
import React, { useEffect, useState } from "react";

type todoList = {
  title: string;
};

export const TodosList = () => {
  const [todosList, setTodosList] = useState<todoList[]>([]);

  const fetchTodos = async () => {
    const response = await getTodos();
    if (response?.success) {
      setTodosList(response?.data);
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  console.log(todosList, "todosList");
  return todosList?.map((ele) => <h1>{ele?.title}</h1>);
};
