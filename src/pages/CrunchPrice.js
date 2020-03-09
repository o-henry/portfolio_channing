import React from "react";
import "./Crunchp.scss";

export default function CrunchPrice() {
  return (
    <div className="Crunch">
      <iframe
        className="Crunch-video"
        width="700"
        height="455"
        src="https://www.youtube.com/embed/tjxwqqM10Tk"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="Half">
        <div className="Content">
          <b>크런치 프라이스</b> 기업협업 프로젝트 2019 <br></br>| Back-End |
          AWS |<br></br>
          <br></br> AWS Personalize를 활용하여 MD의 개입없이<br></br>{" "}
          인공지능으로 사용자 개개인 에게 맞는 상품 추천 <br></br>시스템을
          구현했습니다.
          <br></br>
          <br></br>
          <a
            href="https://o-henry.github.io/2019/10/21/AWSPersonalize/"
            className="link"
          >
            BLOG
          </a>
        </div>
      </div>
    </div>
  );
}
