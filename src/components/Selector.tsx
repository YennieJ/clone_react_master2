import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, createCategoryState } from "../atoms";

const Selector = () => {
  const [category, setCategory] = useRecoilState(categoryState);
  const createCategory = useRecoilValue(createCategoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <select value={category} onInput={onInput}>
      <option value={Categories.TO_DO}>To Do</option>
      <option value={Categories.DOING}>Doing</option>
      <option value={Categories.DONE}>Done</option>
      {Object.keys(createCategory).map((data) => {
        return (
          <option key={data} value={data}>
            {data}
          </option>
        );
      })}
    </select>
  );
};

export default Selector;
