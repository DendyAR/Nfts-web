import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import './footer.css'

const MY_ACCOUNTS = [
  {
    display:'Author Profile',
    url:'/seller-profile'
  },
  {
    display:'Create Items',
    url:'/create'
  },
  {
    display:'Collection',
    url:'/market'
  },
  {
    display:'Edit Profile',
    url:'/edit-profile'
  },
]
const RESOURCES = [
  {
    display:'Help Center',
    url:'/#'
  },
  {
    display:'Partner',
    url:'/#'
  },
  {
    display:'Community',
    url:'/#'
  },
  {
    display:'Activity',
    url:'/#'
  },
]
const COMPANY = [
  {
    display:'About',
    url:'/#'
  },
  {
    display:'Carrer',
    url:'/#'
  },
  {
    display:'Ranking',
    url:'/#'
  },
  {
    display:'Contact US',
    url:'/contact'
  },
]

const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='3' md='6' sm='6'>
        <div className="logo">
            <h2 className="d-flex gap-2 align-items-center">
              <span>
                <i className="ri-fire-fill"></i>
              </span>
              NFTs
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nulla cum perspiciatis eveniet? Pariatur molestias natus officia, aperiam excepturi dignissimos consequatur asperiores at quidem unde iusto, saepe adipisci sunt qui.</p>
          </div>
        </Col>

        <Col lg='2' md='3' sm='6'>
          <h5>My Account</h5>
          <ListGroup className='list__group'>
            {
              MY_ACCOUNTS.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                    <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>

        <Col lg='2' md='3' sm='6'>
        <h5>Resources</h5>
          <ListGroup className='list__group'>
            {
              RESOURCES.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                    <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>

        <Col lg='2' md='3' sm='6'>
        <h5>Company</h5>
          <ListGroup className='list__group'>
            {
              COMPANY.map((item, index) => (
                <ListGroupItem key={index} className="list__item">
                    <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>
         
        <Col lg='2' md='3' sm='6'>
          <h5>Newslatter</h5>
          <input type="text" className="newsletter" placeholder='email' />
          <div className="social__links d-flex gap-3 align-items-center ">
              <span><Link to='#'><i className="ri-facebook-circle-fill"></i></Link></span>
              <span><Link to='#'><i className="ri-instagram-fill"></i></Link></span>
              <span><Link to='#'><i className="ri-linkedin-box-fill"></i></Link></span>
              <span><Link to='#'><i className="ri-twitter-fill"></i></Link></span>
              <span><Link to='#'><i className="ri-telegram-fill"></i></Link></span>
              <span><Link to='#'><i className="ri-discord-fill"></i></Link></span>
          </div>
        </Col>
        <Col lg="12" className='text-center mt-4'>
          <p className='copyright'>Copyright 2022 , Developed by Dendy Anugerah Ramadhan. @DendyAR Tech All Rights Reserverd</p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer