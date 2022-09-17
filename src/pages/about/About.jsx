import React from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut molestiae
        in nobis reprehenderit soluta, cupiditate praesentium facilis non maxime
        architecto!
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Out story pic" />
          </div>
          <div className="about__section-content">
            <h1>Out story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              animi unde non! Temporibus pariatur alias nisi modi voluptas
              consequuntur, autem id non, nam quo sequi porro eaque quaerat quas
              odio perferendis nulla sed placeat voluptatem magni enim suscipit
              officiis explicabo consectetur? Voluptatem aliquam et repellendus.
              Cupiditate commodi, voluptatem et hic perspiciatis delectus
              similique suscipit inventore, ducimus fugit eius fugiat obcaecati?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              impedit ratione voluptatem eligendi animi rem, illo ut sequi
              mollitia magnam vero, corporis, voluptates nesciunt aperiam
              ducimus sapiente earum molestiae vitae optio odio maxime eveniet
              quo tempora. Fugiat dolorum blanditiis est!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              rem ipsam ut officiis culpa quos atque rerum adipisci sunt
              inventore?
            </p>
          </div>
        </div>
      </section>

      <section className="about__Vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Out Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              animi unde non! Temporibus pariatur alias nisi modi voluptas
              consequuntur, autem id non, nam quo sequi porro eaque quaerat quas
              odio perferendis nulla sed placeat voluptatem magni enim suscipit
              officiis explicabo consectetur? Voluptatem aliquam et repellendus.
              Cupiditate commodi, voluptatem et hic perspiciatis delectus
              similique suscipit inventore, ducimus fugit eius fugiat obcaecati?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              impedit ratione voluptatem eligendi animi rem, illo ut sequi
              mollitia magnam vero, corporis, voluptates nesciunt aperiam
              ducimus sapiente earum molestiae vitae optio odio maxime eveniet
              quo tempora. Fugiat dolorum blanditiis est!
            </p>
          </div>

          <div className="about__section-image">
            <img src={VisionImage} alt="Out Vision Pic" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Out mission Pic" />
          </div>
          <div className="about__section-content">
            <h1>Out mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              animi unde non! Temporibus pariatur alias nisi modi voluptas
              consequuntur, autem id non, nam quo sequi porro eaque quaerat quas
              odio perferendis nulla sed placeat voluptatem magni enim suscipit
              officiis explicabo consectetur? Voluptatem aliquam et repellendus.
              Cupiditate commodi, voluptatem et hic perspiciatis delectus
              similique suscipit inventore, ducimus fugit eius fugiat obcaecati?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              impedit ratione voluptatem eligendi animi rem, illo ut sequi
              mollitia magnam vero, corporis, voluptates nesciunt aperiam
              ducimus sapiente earum molestiae vitae optio odio maxime eveniet
              quo tempora. Fugiat dolorum blanditiis est!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              rem ipsam ut officiis culpa quos atque rerum adipisci sunt
              inventore?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
