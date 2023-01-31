const axios = require("axios");

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const getTodoList = () => {
  return instance.get("/todos");
};

const postTodoList = () => {
  return instance.post("/posts", {
    method: "POST",
    headers: { "content-type": "application/json" }
  });
};

const putTodoList = () => {
    return instance.put("/posts/1", {
      method: "PUT",
      headers: { "content-type": "application/json" }
    })
}

const patchTodoList = () => {
    return instance.patch("/posts/1", {
      method: "PATCH",
      headers: { "content-type": "application/json" }
    })
}

const deleteTodoList = () => {
    return instance.delete("/posts/1")
}

module.exports = {
  getTodoList,
  postTodoList,
  putTodoList,
  patchTodoList,
  deleteTodoList
};
