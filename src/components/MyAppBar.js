import React from "react";

export default function MyAppBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* eslint-disable-next-line */}
        <a className="navbar-brand" href="#">
          CryptoTracker
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
        {/* eslint-disable-next-line */}
              <a className="nav-link active" aria-current="page" href="#">
                Cryptos
              </a>
            </li>
            <li className="nav-item">
        {/* eslint-disable-next-line */}
              <a className="nav-link" href="#">
                Exchanges
              </a>
            </li>
            <li className="nav-item">
        {/* eslint-disable-next-line */}
              <a className="nav-link" href="#">
                Credits
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
