import React, { useEffect } from "react";
// import "./Home.css";

const Home = () => {

  // Нужно исправить ошибку с преждевременным изменением элемента до того как прогрузиться

  // const countDownDate = new Date("Jan 5, 2022, 15:37:25").getTime();
  //   setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = countDownDate - now;

  //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor(
  //       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //     document.getElementById(
  //       "demo"
  //     ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;
  //   }, 1000);


  return (
    <div className="bigimg">
      <div className="topleft">
        <p>Logo</p>
      </div>
      <div className="middle">
        <h1>COMING SOON</h1>
        <hr />
        <p id="demo"></p>
      </div>
      <div className="bottomleft">
        <p>Some Text</p>
      </div>
    </div>
  );
};

export default Home();
