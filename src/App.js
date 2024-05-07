import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import "./style/homeLogin.css"
import Button from 'react-bootstrap/Button'
import { Form, Card, Container, Row, Col, Image } from 'react-bootstrap'
import Login from './pages/LoginPage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/awal' element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}
export default App