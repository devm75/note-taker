export const getTodos = async () => {
  const response = await fetch("/api/todos", {
    method: "GET",
  });

  const finalResponse = await response.json();
  return finalResponse;
};

export const createTodo = async (payload: any) => {
  const response = await fetch("/api/todos", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  return response.json();
};
