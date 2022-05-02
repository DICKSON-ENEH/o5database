import React ,{useEffect}from 'react'
import styled from "styled-components"
import {Link } from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css"

const Data = () => {

  useEffect(()=>{
Aos.init({duration:2000})
  }, [])
  return (
  <Container data-aos="fade-right">
       <Wrapper>
           <Link to ="/"><Nav><button>Home</button></Nav></Link>
           <Nav><button>About</button></Nav>
          <Link to ="/o5datas"><Nav><button>Database</button></Nav></Link> 
          <Link to ="/review"><Nav><button>Reviews </button></Nav></Link>
       </Wrapper>
   </Container>
  )
}

export default Data

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div`
display: flex;
justify-content: space-around;
flex-direction: column;
align-items: center;
width:100%;
height: 100vh;
`
const Nav = styled.div`
text-decoration:none;
button{
  background:transparent;
  border:none;
  outline:none;
  font-size:20px;
  :hover{
    transform:scale(1.1);
    transition:all 300ms;
  }
}
`

