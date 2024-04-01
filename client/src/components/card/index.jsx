import React, { ReactNode } from "react";
import "./style.css";

// interface CardProps {
//   children: ReactNode;
//   width?: boolean;
// }

const Card = ({ children, width }) => {
  return (
    <div
      className="card_container"
      style={width ? { maxWidth: "729px" } : { maxWidth: "552px" }}
    >
      {children}
    </div>
  );
};

export default Card;
