import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../../assets/img/logo.svg'
import navicon1 from '../../assets/img/nav-icon1.svg'
import navicon2 from '../../assets/img/nav-icon2.svg'
import navicon3 from '../../assets/img/nav-icon3.svg'


export default function NavBar() {
const [activeLink, setActiveLink] = useState('home')
const [scroll, setScroll] = useState(false)


useEffect(() => {
  const onScroll=()=>{
    if (window.scrollY>50){
        setScroll(true)
    }else{
        setScroll(false)
    }
  }
window.addEventListener('scroll',onScroll)
}, [])

const onUpdateActiveLink=(value)=>{
    setActiveLink(value)
}

  return<>
 <Navbar  expand="lg"className={scroll?'scrolled':''} >
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="https://drive.google.com/file/d/1pOLrOpWbYZ0kjbA3J4CuUyvZqHvVcle-/view"
            className={activeLink==='projects'?'active navbar-link':'navbar-link'} target='_blank'
             onClick={()=>onUpdateActiveLink('My Resume')} >My Resume</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills'?'active navbar-link':'navbar-link'}  onClick={()=>onUpdateActiveLink('skills')} >skills</Nav.Link>
            <Nav.Link href="#projects"className={activeLink==='projects'?'active navbar-link':'navbar-link'}  onClick={()=>onUpdateActiveLink('projects')} >projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className="social-icon">
                <a target='_blank' href="https://www.linkedin.com/in/miladshehata"><img src={navicon1} alt="" /></a>
                <a target='_blank' href="https://github.com/melad14"><img src='' alt="" className='fa-brands fa-github  text-light'/></a>
                <a target='_blank'href="https://www.facebook.com/profile.php?id=100007918597554&mibextid=ZbWKwL "><img src={navicon2} alt="" /></a>
                <a target='_blank'href=" https://instagram.com/milad_shehata_14?igshid=ZDdkNTZiNTM= "><img src={navicon3} alt="" /></a>
            </div>
            <button className='vvd'><a className='throw' href="#connect">let's connect</a> </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}