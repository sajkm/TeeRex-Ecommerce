import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'





function Header() {
  return (
    <Navbar expand="lg" className="bg-success  top-0 w-100 mb-5" style={{zIndex:'1'}}>
      <Container>
        <Navbar.Brand><Link to={'/'} style={{textDecoration:'none',color:'white',fontWeight:'bold'}}><i class="fa-solid fa-shirt">TeeRex</i></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border rounded'>
                <Link to={'/wishlist'} className='d-flex align-items-center' style={{textDecoration:'none', color:'white',fontWeight:'bold'}}><i className='fa-solid fa-heart text-danger me-2'></i>Wishlist
                
                </Link>
            </Nav.Link>
            <Nav.Link className='btn border rounded ms-3'>
                <Link to={'/cart'} className='d-flex align-items-center' style={{textDecoration:'none', color:'white',fontWeight:'bold'}}><i className='fa-solid fa-cart-shopping text-warning me-2'></i>Cart
                
                </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header