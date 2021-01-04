import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup, currentUser } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Password do not match')
    }
    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch (error) {
      setError('Faild to create an account')
    }
    setLoading(false)
  }

  return (
    <>
      <Card className='shadow mb-4'>
        <Card.Body>
          <div className='text-center'>
            <h2>Sign up</h2>
          </div>
          {currentUser && currentUser.email}
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' ref={passwordRef} required />
            </Form.Group>
            <Form.Group id='password-confirm'>
              <Form.Label>Confirm password</Form.Label>
              <Form.Control type='password' ref={passwordConfirmRef} required />
            </Form.Group>
            <Button className='w-100' type='submit' disabled={loading}>
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='text-center'>
        Already have an account? <a href='#'>Log in</a>
      </div>
    </>
  )
}
