import React, { useState } from "react";
import ModalWindow from "components/modalWindow/ModalWindow";
import AddUser from "components/addUser/AddUser";
import newUserIco from "@public/image/newUser.png";
export default function NewUser() {
  const [add, setAdd] = useState(false);
  const handleAdd = () => setAdd(true);

  return (
    <>
      {add && (
        <ModalWindow title="Создание нового пользователя" close={setAdd}>
          <AddUser />
        </ModalWindow>
      )}
      <div onClick={handleAdd}>
        <img src={newUserIco} alt="" />
      </div>
    </>
  );
}
