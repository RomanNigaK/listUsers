import Avatar from "components/avatar/Avatar";
import React, { useEffect } from "react";
import { User } from "redux/slice/app.slice";
import s from "./ProfileUser.module.scss";
import { useAppSelector } from "hooks/redux.hook";
import { selectorUserContacts } from "redux/selectors";
import ListUsers from "components/common/listUsers/ListUsers";
export default function ProfileUser({
  name,
  photo,
  age,
  city,
  contacts,
  id,
}: User) {
  const contactsUser = useAppSelector((state) =>
    selectorUserContacts(state, contacts || [])
  );

  console.log(contactsUser);
  return (
    <div className={s.profile}>
      <div className={s.image}>
        <Avatar size="max" image={photo} id={id} />
      </div>
      <div className={s.data}>
        <div>
          <i>Имя:</i> {name}
        </div>
        <div>
          <i>Возраст:</i> {age}
        </div>
        <div>
          <i>город:</i> {city}
        </div>
      </div>
      <div className={s.contacts}>
        <h3>Контакты пользователя</h3>
        <ListUsers users={contactsUser} />
      </div>
    </div>
  );
}
