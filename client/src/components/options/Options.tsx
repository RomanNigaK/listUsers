import React from "react";
import NewUser from "./newUser/NewUser";
import s from "./Options.module.scss";

export default function Options() {
  return (
    <div className={s.options}>
      <NewUser />
    </div>
  );
}
