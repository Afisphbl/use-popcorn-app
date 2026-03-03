import React from "react";

export default function Button({
  class__name = "",
  type = "button",
  children,
  onClick = () => {},
}) {
  return (
    <button className={class__name} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
