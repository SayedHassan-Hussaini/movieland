import React from "react";

function Card({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`block  rounded-[10px] bg-white p-4 ${className}`}>
      {children}
    </div>
  );
}

export default Card;
