import React from 'react'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const routeTo = useNavigate();
    const onBack = () => routeTo("/");
    const onLogin = () => routeTo("/login");
  return (
    <nav>
        <Button onClick={onBack}>Back</Button>
        <Button onClick={onLogin}>Login</Button>
    </nav>
  )
}

export default Navbar