import React from "react";

interface Props {
  text: string;
}

const CircleItem = ({ text }: Props) => {
  return (
    <div className="circle-border">
      <div className="circle-rotator"></div>
      <div className="circle-content">
        <div className="fixed-text">{text}</div>
      </div>
    </div>
  );
};

export default CircleItem;
