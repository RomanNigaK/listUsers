import React from "react";
interface ISubmit {
  id: string;
}
export default function Submit({ id }: ISubmit) {
  return <input type="submit" id={id} style={{ display: "none" }} />;
}
