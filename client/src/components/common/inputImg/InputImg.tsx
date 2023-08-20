import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import s from "./InputImg.module.scss";
import { error } from "console";
import load from "./media/load.png";
interface IInputImg {
  setFile: Dispatch<SetStateAction<File | undefined>>;
  error?: any;
  clearImage?: boolean;
  setClearImage?: Dispatch<SetStateAction<boolean>>;
}

export default function InputImg({
  setFile,
  error,
  clearImage,
  setClearImage,
}: IInputImg) {
  const [selectedImage, setSelectedImage] = useState();

  const [preview, setPreview] = useState<string>();

  useEffect(() => {
    if (selectedImage && clearImage) {
      setClearImage && setClearImage(false), setPreview(undefined);
    }
  }, [clearImage]);

  useEffect(() => {
    if (!selectedImage) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedImage);

    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedImage]);

  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedImage(undefined);
      return;
    }
    setSelectedImage(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  return (
    <div className={s.imageInput}>
      <div className={s.label}>
        <label htmlFor="image">
          <img src={load} alt="" />
        </label>
      </div>

      {selectedImage && <img src={preview} />}
      <input
        type="file"
        style={{ display: "none" }}
        id="image"
        onChange={onSelectFile}
      />
      {error}
    </div>
  );
}
