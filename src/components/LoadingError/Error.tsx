import React from "react";

interface Props{
    variant:string;
    children:any;
}

const Message = ({ variant, children }:Props) => {
  return <div className={`alert ${variant}`}>{children}</div>;
};

Message.defaultProps = {
  variant: "alert-info",
};

export default Message;
