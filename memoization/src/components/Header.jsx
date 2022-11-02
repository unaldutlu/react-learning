import React from "react";

function Header({ number }) {
  console.log("çalışıyorum");
  return (
    <div>
      <h1>hello- {number}</h1>
    </div>
  );
}

export default React.memo(Header);
