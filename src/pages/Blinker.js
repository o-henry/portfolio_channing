import React from "react";
import "./Blinker.scss";

export default function Blinker() {
  return (
    <div className="Blinker">
      <iframe
        className="Blinker-video"
        width="700"
        height="455"
        src="https://www.youtube.com/embed/dZItllhooso"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="Half">
        <div className="Content">
          <b>윙크로 게임하기</b> 2019<br></br>| Front-End | React | AWS |{" "}
          <br></br>
          <br></br>
          openCV 기반 BRFV4 SDK를 사용하여 윙크를 <br></br>인식, 깜빡일때
          점프하는 웹 게임을 개발했습니다.
          <br></br>
          <br></br>
          <a href="https://github.com/o-henry/Blinker_Client" className="link">
            GITHUB
          </a>
          <br></br>
          <a href="https://d3hj5v0x0oqu9l.cloudfront.net/" className="link">
            GAME
          </a>
        </div>
      </div>
    </div>
  );
}
