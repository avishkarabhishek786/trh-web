import Head from 'next/head';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import ConnectWallet from './ConnectWallet';


function Headers() {
  return (
    <>
     <Head>
     <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Tokamak Rollup Hub</title>
</Head>
    <Navbar expand="lg" className="bg-body-tertiary headerWrap bg-transparent">
      <Container>
        <Navbar.Brand href="#home" className='desktop-only'>Tokamak Rollup Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="deploy" >Deploy</Nav.Link>
            <NavDropdown title="Discover" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item> */}


            </NavDropdown>
            <NavDropdown title="More" id="basic-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item> */}



            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <ConnectWallet />
    </>
  );
}

export default Headers;