import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const go_back = () => {
    navigate(-1);
  };
  const go_forward = () => {
    navigate(1);
  };
  return (
    <div>
      <button onClick={go_back}>Go back</button>🤷‍♂️
      <button onClick={go_forward}>Go forward</button>
    </div>
  );
}

export default Footer;
