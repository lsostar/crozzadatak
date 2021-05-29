import React, { useContext } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AuthContext } from "../../context/AuthContext";
import "./MainHeader.scss";

const MainHeader = ({ title }) => {
  const handleEvent = (event) => {
    event.preventDefault();
    setIsOpened(true);
  };

  const { setIsOpened } = useContext(AuthContext);

  return (
    <div className={"HeaderMain"}>
      <h2 className={"HeaderMain-Title"}>{title}</h2>
      <div className={"IconWrapper"}>
        <AiOutlinePlusCircle onClick={handleEvent} />
      </div>
    </div>
  );
};

export default MainHeader;