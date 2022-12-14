import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, createCategoryState, IToDo, toDoState } from "../atoms";

const ToDo = ({ text, category, id }: IToDo) => {
  const newCategory = useRecoilValue(createCategoryState);

  const setToDos = useSetRecoilState(toDoState);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;
    setToDos((oldTodos) => {
      const targetIndex = oldTodos.findIndex((todo) => todo.id === id);
      // const oldToDo = oldTodos[targetIndex];
      const newToDo = { text, id, category: name as any };
      return [
        ...oldTodos.slice(0, targetIndex),
        newToDo,
        ...oldTodos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <>
      <li>
        <span>{text}</span>
        {category !== Categories.DOING && (
          <button name="DOING" onClick={onClick}>
            Doing
          </button>
        )}

        {category !== Categories.TO_DO && (
          <button name="TO_DO" onClick={onClick}>
            To Do
          </button>
        )}
        {category !== Categories.DONE && (
          <button name="DONE" onClick={onClick}>
            Done
          </button>
        )}
        {Object.keys(newCategory).map(
          (data) =>
            category !== data && (
              <button key={data} name={data} onClick={onClick}>
                {data}
              </button>
            )
        )}
      </li>
    </>
  );
};

export default ToDo;

// const onClick = (newCategory: IToDo["catecory"]) => {};

// {catecory !== "DOING" && (
//   <button onClick={() => onClick("DOING")}>Doing</button>
// )}

// {catecory !== "TO_DO" && (
//   <button onClick={() => onClick("TO_DO")}>To Do</button>
// )}
// {catecory !== "DONE" && (
//   <button onClick={() => onClick("DONE")}>Done</button>
// )}
