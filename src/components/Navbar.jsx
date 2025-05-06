import React from 'react';

export const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <div className="navbar-brand" onClick={() => setCategory('all')}>Ecomm</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filter
              </div>
              <ul className="dropdown-menu">
                <li><div onClick={() => setCategory("men's clothing")} className="dropdown-item">men's clothing</div></li>
                <li><div onClick={() => setCategory("women's clothing")} className="dropdown-item">women's clothing</div></li>
                <li><div onClick={() => setCategory("jewelery")} className="dropdown-item">jewelery</div></li>
                <li><div onClick={() => setCategory("electronics")} className="dropdown-item">electronics</div></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
