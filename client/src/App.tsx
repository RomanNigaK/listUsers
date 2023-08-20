import React, { useEffect, useState } from "react";
import "./style/global.scss";
import s from "./App.module.scss";
import Options from "components/options/Options";
import useHttp from "hooks/http.hook";
import { User, loadUsers } from "redux/slice/app.slice";
import { useAppDispatch, useAppSelector } from "hooks/redux.hook";
import { selectorUsers } from "redux/selectors";
import CardUser from "components/cardUser/CardUser";
import Preloader from "components/common/preloader/Preloader";
import ModalWindow from "components/modalWindow/ModalWindow";

export default function App() {
  const { loading, error, request } = useHttp();

  const dispatch = useAppDispatch();

  const users = useAppSelector((state) => selectorUsers(state));

  const load = async () => {
    let users = await request("/api/users/");
    dispatch(loadUsers(users.data));
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <div className={s.app}>
        <div className={s.options}>
          <Options />
        </div>
        <div className={s.content}>
          {users.length === 0 && !loading
            ? "Данных нет"
            : users.map((e, i) => (
                <CardUser {...e} key={"cardUser_" + i + 1} />
              ))}
          {loading && <Preloader />}
        </div>
      </div>
    </>
  );
}
