var express = require("express");
const { getTodoList, postTodoList, putTodoList, patchTodoList, deleteTodoList, } = require("../modules/http/axios");
var router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    const todoListRespon = await getTodoList();
    const dataTodoList = todoListRespon.data;
    res.send({
      status: true,
      data: dataTodoList,
    });
  } catch (error) {
    res.send({
      status: false,
      message: error.message,
    })
  }
  // res.send('respond with a resource');
});

router.post("/submit", async function (req, res, next) {
  try {
    const postodoList = await postTodoList();
    const respond = postodoList.data;
    res.send({
      status: true,
      data: respond,
    });
  } catch (error) {
    res.send({
      status: false,
      message: error.message,
    })
  }
  // res.send('respond with a resource');
});

router.put("/update", async function (req, res, next) {
  try {
    const putodoList = await putTodoList();
    const respond = putodoList.data;
    res.send({
      status: true,
      data: respond,
    });
  } catch (error) {
    res.send({
      status: false,
      message: error.message,
    })
  }
  // res.send('respond with a resource');
});

router.patch("/patch", async function (req, res, next) {
  try {
    const patodoList = await patchTodoList();
    const respond = patodoList.data;
    res.send({
      status: true,
      data: respond,
    });
  } catch (error) {
    res.send({
      status: false,
      message: error.message,
    })
  }
  // res.send('respond with a resource');
});

router.delete("/delete", async function (req, res, next) {
  try {
    const deltodoList = await deleteTodoList();
    const respond = deltodoList.data;
    res.send({
      status: true,
      data: respond,
    });
  } catch (error) {
    res.send({
      status: false,
      message: error.message,
    })
  }
  // res.send('respond with a resource');
});

module.exports = router;
