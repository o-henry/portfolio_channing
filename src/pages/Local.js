import React from "react";
import "./Localsns.scss";

export default function Local() {
  return (
    <div className="Local">
      <iframe
        className="Local-video"
        width="700"
        height="455"
        src="https://www.youtube.com/embed/LkqD32oWN20"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="Half">
        <div className="Content">
          <b>LOCAL SNS</b> 개인 프로젝트 2019 (진행 중) <br></br>| Expo | React
          | Express | Puppeteer | <br></br>
          <br></br> 인스타그램 해시태그, 장소, 날짜 데이터를 크롤링 및 가공 하여
          사용하는 해시태그 데이터 기반 어플리케이션 입니다.
          <br></br>
          <br></br>
          <a
            href="https://o-henry.github.io/2019/10/29/Insta/"
            className="link"
          >
            BLOG
          </a>
          <br></br>
          <a href="https://github.com/o-henry/LocalServer" className="link">
            GITHUB - SERVER
          </a>
          <br></br>
          <a href="https://github.com/o-henry/LocalSNSApp" className="link">
            GITHUB - CLIENT
          </a>
        </div>
      </div>
    </div>
  );
}
