import { Container, Row, Col } from 'react-bootstrap'
import { AuthProvider } from './contexts/AuthContext'
import Signup from './Signup'
function App() {
  return (
    <AuthProvider>
      <div className='bg-light'>
        <Container>
          <Row className='align-items-center justify-content-center min-vh-100'>
            <Col xs={12} md={6}>
              <Signup></Signup>
            </Col>
          </Row>
        </Container>
      </div>
    </AuthProvider>
  )
}

export default App
