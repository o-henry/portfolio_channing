import React from "react";
// import Menu from "../components/Menu";
import { Menu, Contact } from "../components";
import "./Homecss.scss";

const Home = () => {
  return (
    <div className="Homepage">
      <div className="About">
        <div className="About-Head">
          Hello
          <div className="About-Body">
            협업과 소통을 좋아하는 주니어 개발자 입니다.
            <br></br> 고안한 로직에 따라 구현되는 개발을 좋아하며, <br></br>
            다양한 분야에 관심이 많아 배움을 즐기고 있습니다. <br></br>또,
            아이디어를 기록하고, 실제 구체화 가능한지에 대한 고민을 하곤 합니다.
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Home;
