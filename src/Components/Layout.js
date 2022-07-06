import React from 'react';

import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <Link to="/">Logo</Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <Link to="">Link</Link>
              </li>
              <li class="nav-item">
                <Link to="/"> Link </Link>
              </li>
              <li class="nav-item">
                <Link to="/"> Link </Link>
              </li>
            </ul>

            <button class="btn btn-primary" type="button">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
