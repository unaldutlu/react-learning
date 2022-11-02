import React from "react";

function Header({ number, data }) {
  console.log("çalışıyorum");
  return (
    <div>
      hello- {number}
      <br />
      <br />
      <code>{JSON.stringify(data)}</code>
    </div>
  );
}

export default React.memo(Header);
