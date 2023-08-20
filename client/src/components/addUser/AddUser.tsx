import React, { useEffect, useState } from "react";
import s from "./AddUser.module.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "components/common/input/Input";
import InputImg from "components/common/inputImg/InputImg";
import { useAppDispatch, useAppSelector } from "hooks/redux.hook";
import { addUser } from "redux/slice/app.slice";
import Submit from "components/common/submit/Submit";
import { selectorUsers } from "redux/selectors";
import ListUsers from "components/common/listUsers/ListUsers";
const schema = yup.object().shape({
  name: yup.string().required("обязательно для заполнения"),
  age: yup
    .number()
    .integer()
    .typeError("введите целое  число")
    .required("обязательно для заполнения"),
  city: yup.string().required("обязательно для заполнения"),
  photo: yup.mixed().required("выберите фаил"),
});

type FormNewUser = {
  name: string;
  age: number;
  city: string;
  photo: any;
};

export default function AddUser() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormNewUser>({ resolver: yupResolver(schema) });

  const dispatch = useAppDispatch();

  const [file, setFile] = useState<File | undefined>();

  const usersList = useAppSelector((state) => selectorUsers(state));

  const [clearImage, setClearImage] = useState(false);

  const onSubmit: SubmitHandler<FormNewUser> = (data: any) => {
    data.photo = URL.createObjectURL(data.photo);
    dispatch(addUser(data));
    reset();
    setClearImage(true);
    setFile(undefined);
  };

  useEffect(() => {
    setValue("photo", file);
  }, [file]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.form}>
          <div className={s.userData}>
            <Input
              name="name"
              register={register}
              placeholder="Имя"
              error={errors.name?.message}
            />
            <Input
              name="age"
              register={register}
              placeholder="Возраст"
              error={errors.age?.message}
            />
            <Input
              name="city"
              register={register}
              placeholder="Город"
              error={errors.city?.message}
            />
          </div>
          <div className={s.image}>
            <InputImg
              setFile={setFile}
              clearImage={clearImage}
              setClearImage={setClearImage}
            />
          </div>
        </div>

        <Submit id="submit" />
      </form>
      <div className={s.contacts}>
        <h3>Добавить контакты для этого пользователя?</h3>
        <ListUsers users={usersList} check />
      </div>
      <label htmlFor="submit">
        <div className={s.submit}>Добавить пользователя</div>
      </label>

      <div className={s.errorForm}>
        {!file && (errors.photo?.message as string)}
      </div>
    </div>
  );
}
