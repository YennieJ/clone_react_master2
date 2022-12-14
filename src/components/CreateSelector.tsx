import React from "react";
import { useForm } from "react-hook-form";

import { useSetRecoilState } from "recoil";
import { createCategoryState } from "../atoms";

interface IForm {
  newCategory: string;
}
const CreateSelector = () => {
  const setCareateCategory = useSetRecoilState(createCategoryState);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IForm>();

  const onValid = (data: IForm) => {
    setCareateCategory((prev: IForm) => {
      return { ...prev, [data.newCategory]: [] };
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        placeholder="new Category"
        {...register("newCategory", {
          required: "If you want to create new category, Fill in the blanks ",
        })}
      />
      <button>Create Category</button>
      <span>{errors?.newCategory?.message}</span>
    </form>
  );
};

export default CreateSelector;
