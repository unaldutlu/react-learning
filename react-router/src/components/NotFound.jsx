import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <p>This page is not found!</p>
      <Link to='/'>Ana Sayfaya Geri Dön!</Link>
      <br />
      <hr />
    </div>
  );
}

export default NotFound;
