import React from "react";

export default function Button({
  textColor,
  bgColor,
  borderColor,
  hoverTextColor,
  hoverBgColor,
  hoverBorderColor,
  children,
  onClick,
}: {
  textColor: string;
  bgColor: string;
  borderColor: string;
  hoverTextColor: string;
  hoverBgColor: string;
  hoverBorderColor: string;
  children: any;
  onClick: (a: string) => void;
}) {
  return (
    <div
      className={`text-1xl font-bold ${textColor} cursor-pointer rounded-xl ${bgColor} p-2 border ${borderColor} w-48 mx-2 text-center hover:${hoverBgColor} hover:${hoverBorderColor} hover:${hoverTextColor}`}
    >
      {children}
    </div>
  );
}
