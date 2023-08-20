import React, {
  CSSProperties,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";
import s from "./ModalWindow.module.scss";
import closeIco from "./media/close.svg";
interface UModalW extends PropsWithChildren {
  close: Dispatch<SetStateAction<boolean>>;
  title: string;
}

export default function ModalWindow({ children, close, title }: UModalW) {
  const [width, setWidth] = useState(document.documentElement.clientWidth);
  const [height, setHeight] = useState(document.documentElement.clientHeight);
  const [scrollTop, setScrollTop] = useState(
    document.documentElement.scrollTop
  );

  const style: CSSProperties = {
    width: width,
    height: height,
    top: scrollTop,
  };
  addEventListener("resize", () => {
    setHeight(document.documentElement.clientHeight);
    setWidth(document.documentElement.clientWidth);
  });

  addEventListener("scroll", () => {
    setScrollTop(document.documentElement.scrollTop);
  });

  return (
    <div className={s.modal} style={style}>
      <div>
        <div>
          <div>
            <h3>{title}</h3>
          </div>
          <div onClick={() => close(false)}>
            <img src={closeIco} alt="" className={s.close} />
          </div>
        </div>
        <div className={s.children}> {children}</div>
      </div>
    </div>
  );
}
