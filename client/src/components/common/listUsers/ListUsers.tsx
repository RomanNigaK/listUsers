import React from "react";
import s from "./ListContacts.module.scss";
import { User } from "redux/slice/app.slice";
import Avatar from "components/avatar/Avatar";
interface IListUsers {
  users: User[];
  check?: boolean;
}

export default function ListUsers({ users, check = false }: IListUsers) {
  return (
    <div className={s.listContacts}>
      {users.length > 0 &&
        users.map((e, i) => {
          return (
            <div
              style={{
                textAlign: "center",
              }}
              key={"user_" + i}
            >
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Avatar size="small" image={e.photo} check={check} id={e.id} />
              </div>

              {e.name}
            </div>
          );
        })}
    </div>
  );
}
