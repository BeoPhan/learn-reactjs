import querystring from "query-string";
import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    { id: 1, title: "sleep", status: "new" },
    { id: 2, title: "eat", status: "completed" },
    { id: 3, title: "code", status: "new" },
  ];

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState(() => {
    const params = querystring.parse(location.search);
    return params.status || "all";
  });

  useEffect(() => {
    const params = querystring.parse(location.search);
    setFilterStatus(params.status || "all");
  }, [location.search]);

  const handleTodoClick = (todo, idx) => {
    console.log(todo, idx);
    const newTodoList = [...todoList];
    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };
    newTodoList[idx] = newTodo;
    setTodoList(newTodoList);
  };

  const handleShowAll = () => {
    // setFilterStatus("all");
    const queryParams = { status: "all" };
    history.push({
      pathname: match.path,
      search: querystring.stringify(queryParams),
    });
  };
  const handleShowCompleted = () => {
    // setFilterStatus("completed");
    const queryParams = { status: "completed" };
    history.push({
      pathname: match.path,
      search: querystring.stringify(queryParams),
    });
  };
  const handleShowNew = () => {
    // setFilterStatus("new");
    const queryParams = { status: "new" };
    history.push({
      pathname: match.path,
      search: querystring.stringify(queryParams),
    });
  };

  const renderedTodoList = useMemo(() => {
    return todoList.filter((todo) => filterStatus === "all" || filterStatus === todo.status);
  }, [todoList, filterStatus]);

  const handleTodoFormSubmit = (values) => {
    console.log("formsubmit", values);
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: "new",
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };
  return (
    <div>
      <h3>What To do</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAll}>Show All</button>
        <button onClick={handleShowCompleted}>Show Completed</button>
        <button onClick={handleShowNew}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
