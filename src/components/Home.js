import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <Container>
      
<Wrapper>
<Text>
Relationships and network is a ways in which people grow and become best of themselves..
having a team that will not bend till a victory is worth the value of life😘
</Text>
  
<Button to="/data">
 <button> lets journey</button>
</Button>
</Wrapper>
    </Container>
  )
}

export default Home
const Container =  styled.div`
width:100%;
height:100%;

background-color: #091D3B;
display: flex;
justify-content: center;
flex-wrap: wrap;

@media (min-width: 330px) and (max-width:430px){
 
}
`
const Wrapper =  styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width:100%;
background-image:url("/IMG-20220305-WA0212.jpg");
background-position: center;
background-repeat: no-repeat;
background-size:cover;
align-items: center;
justify-content: center;

color: white;

font-weight:bold;
font-size: 20px;
@media(min-width: 330px) and (max-width:430px){
    background-size:cover;
    background-position: contain;
     /* position: fixed; */
     height: 100vh;
   
    
}

`
const Text = styled.div`
@media(min-width: 330px) and (max-width:430px){
    width:300px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity:1;
    text-align:center
}
`
const Button = styled(Link)`
button{
  margin-top:10px;
  padding:10px 60px;
  border-radius:20px;
  border:none;
  outline:none;
  :hover{
    transition: all 300ms;
    transform:scale(1.05)
  }
}
`
