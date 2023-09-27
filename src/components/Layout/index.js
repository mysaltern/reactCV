import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'
import { Container, Row, Col } from 'react-bootstrap'
const Layout = () => {
  return (
    <div className="App">


                <Sidebar />


            <Container >
                <div className="spaceStd">


                    <Row md={11}>
                        <Col xs={11} sm={11} >
                        <div className="page">
                             <Outlet />
                        </div>

                        </Col>
                    </Row>
                </div>


        </Container>
    </div>
  )
}

export default Layout