import React, { CSSProperties, useState } from "react";
import s from "./Avatar.module.scss";
import avatarSvg from "./media/avatar.svg";
import { useAppDispatch, useAppSelector } from "hooks/redux.hook";
import { addContact, deleteContact } from "redux/slice/app.slice";
import { selectorIsCheckUser } from "redux/selectors";
interface IAvatar {
  size?: "small" | "middle" | "max";
  image: string;
  check?: boolean;
  id: number;
}
export default function Avatar({
  size = "middle",
  image,
  check = false,
  id,
}: IAvatar) {
  const [isImageUrl, setIsImageUrl] = useState<boolean>();

  const isCheckUser = useAppSelector((state) => selectorIsCheckUser(state, id));

  const sizeAvatar = (type: string) => {
    switch (type) {
      case "small":
        return "50px";
      case "middle":
        return "150px";
      case "max":
        return "300px";
    }
  };

  (async function (url: string) {
    try {
      const data = await fetch(url);
      if (!data.ok) throw data.status;
      setIsImageUrl(true);
    } catch (error) {
      setIsImageUrl(false);
    }
  })(image);

  const style: CSSProperties = {
    width: sizeAvatar(size),
    height: sizeAvatar(size),
    borderColor: isCheckUser ? "red" : "white",
  };

  const dispatch = useAppDispatch();

  const checkedUser = () => {
    check && dispatch(isCheckUser ? deleteContact(id) : addContact(id));
  };

  return (
    <div className={s.avatar} style={style} onClick={checkedUser}>
      <img src={isImageUrl ? image : avatarSvg} alt="" />
    </div>
  );
}
