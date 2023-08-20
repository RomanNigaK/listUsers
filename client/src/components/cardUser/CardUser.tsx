import Avatar from "components/avatar/Avatar";
import ModalWindow from "components/modalWindow/ModalWindow";
import ProfileUser from "components/profileUser.tsx/ProfileUser";
import React, { useState } from "react";
import { User } from "redux/slice/app.slice";
import s from "./CardUser.module.scss";
export default function CardUser(props: User) {
  const [viewProfile, setViewProfile] = useState(false);
  const showProfile = () => setViewProfile(true);

  return (
    <>
      {viewProfile && (
        <ModalWindow close={setViewProfile} title="Профиль пользователя">
          <ProfileUser {...props} />
        </ModalWindow>
      )}
      <div className={s.cardUser}>
        <Avatar image={props.photo} id={props.id} />
        <div>
          <div>{props.name}</div>
          <div onClick={showProfile} className={s.view}>
            Посмотреть профиль
          </div>
        </div>
      </div>
    </>
  );
}
