import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import './stepSection.css'

const STEP__DATA = [
    {
        title: 'Setup your wallet',
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ducimus aliquam repellendus, eveniet beatae laboriosam sunt, reprehenderit excepturi eum blanditiis nihil rerum perferendis minima obcaecati cupiditate cumque, adipisci dolorum maiores!`,
        icon: 'ri-wallet-line'
    },
    {
        title: 'Create your collection',
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ducimus aliquam repellendus, eveniet beatae laboriosam sunt, reprehenderit excepturi eum blanditiis nihil rerum perferendis minima obcaecati cupiditate cumque, adipisci dolorum maiores!`,
        icon: 'ri-layout-masonry-line'
    },
    {
        title: 'Add your NFTs',
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ducimus aliquam repellendus, eveniet beatae laboriosam sunt, reprehenderit excepturi eum blanditiis nihil rerum perferendis minima obcaecati cupiditate cumque, adipisci dolorum maiores!`,
        icon: 'ri-image-edit-line'
    },
    {
        title: 'List Them for sales',
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ducimus aliquam repellendus, eveniet beatae laboriosam sunt, reprehenderit excepturi eum blanditiis nihil rerum perferendis minima obcaecati cupiditate cumque, adipisci dolorum maiores!`,
        icon: 'ri-list-check'
    },
]

const StepSection = () => {
  return <section>
    <Container>
        <Row>
            <Col lg="12" className='mb-4'>
                <h3 className="step__title">Create and sell your NFTs</h3>
            </Col>

                {
                    STEP__DATA.map((item, index) => (
                        <Col lg="3" md="4" sm="6" xs="12"  key={index}>
                        <div className="single__step__item">
                            <span><i className={`${item.icon}`}></i></span>
                            <div className="step__item__content">
                                <h5>
                                    <Link to="/wallet">{item.title}</Link>
                                </h5>
                                <p className=''>{item.desc}</p>
                            </div>
                        </div>
                    </Col>
                    ))
                }

       
        </Row>
    </Container>
  </section>
}

export default StepSection