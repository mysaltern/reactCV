import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'
import { Container, Row, Col } from 'react-bootstrap'
const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <Container >
        <Col>
          <Row>
            <div className="page">

              <Outlet />
       
            </div>
          </Row>
        </Col>
      </Container>

    </div>
  )
}

export default Layout