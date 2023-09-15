import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav class="container my-3">
        <div class="container-fluid d-flex">
          <Link class="nav-link mx-2 fw-bold" to="/">
            Crud
          </Link>
            <Link className="nav-link mx-2" to="/create">
              Create
            </Link>
            <Link className="nav-link mx-2" to="/read">
              Read
            </Link>
        </div>
      </nav>
    </div>
  );
}
