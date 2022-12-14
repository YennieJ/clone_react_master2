import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { toDoSelector } from "../atoms";

import Selector from "./Selector";
import CreateSelector from "./CreateSelector";
import CreateTodo from "./CreateTodo";
import ToDo from "./ToDo";

const ToDoList = () => {
  // const value = useRecoilValue(toDoState);
  // const modFn = useSetRecoilState(toDoState);
  // const [toDos, setToDos] = useRecoilState(toDoState);

  const [formModal, setFormModal] = useState(false);
  const toDos = useRecoilValue(toDoSelector);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <Selector />
      <button onClick={() => setFormModal((prev) => !prev)}>
        new Category
      </button>
      {formModal ? <CreateSelector /> : null}

      <CreateTodo />
      <ul>
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
          // text={todo.text} id={todo.id} === {...toDo}
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
