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
              A <span>highly-curated</span> platform for creating, collecting and <span>trading unique NFTs</span> Non-fungible tokens are an evolution of the relatively simple concept of cryptocurrencies. Modern finance systems consist of sophisticated trading and loan systems for different asset types, ranging from real estate to lending contracts to artwork. By enabling digital representations of physical assets, NFTs are a step forward in the reinvention of this infrastructure.
              </p>

              <div className="hero__btns d-flex align-items-center gap-4">
                <button className="explore__btn glow-on-hover d-flex align-items-center gap-2">
                  <i className="ri-rocket-line roc__"></i>
                  <Link to="/market">Explore</Link>
                </button>
                <button className="create__btn glow-on-hover d-flex align-items-center gap-2">
                  <i className="ri-ball-pen-line pen__"></i>
                  <Link to="/create">Create</Link>
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero__img mt-10">
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
