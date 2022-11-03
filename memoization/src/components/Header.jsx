import React from "react";

function Header({ number, increment }) {
  console.log("çalışıyorum");
  return (
    <div>
      hello- {number}
      <button onClick={increment}>increase</button>
      <br />
      <br />
      {/* <code>{JSON.stringify(data)}</code> */}
    </div>
  );
}

export default React.memo(Header);
