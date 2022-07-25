import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./hero-section.css";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  function onMouseDown(e) {
    if (e.target.name === 'Cube') {
      console.log('I have been clicked!');
    }
  }

  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2>
                Discover rare digital art and collect{" "}
                <span>sell extraordinary</span>NFTs
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                ipsa molestias facere quae quo molestiae corrupti officia, nulla
                voluptatum est cum quaerat dolorem voluptates nesciunt unde
                eaque voluptatibus numquam. Blanditiis.
              </p>

              <div className="hero__btns d-flex align-items-center gap-4">
                <button className="explore__btn d-flex align-items-center gap-2">
                  <i className="ri-rocket-line"></i>
                  <Link to="/market">Explore</Link>
                </button>
                <button className="create__btn d-flex align-items-center gap-2">
                  <i className="ri-ball-pen-line"></i>
                  <Link to="/create">Create</Link>
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero__img">
            <Spline scene="https://prod.spline.design/PilpVmDXoU-epy20/scene.splinecode"
             onMouseDown={onMouseDown}
            />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
