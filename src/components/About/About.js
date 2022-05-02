import React from 'react'
import styled from "styled-components"

const About = () => {
  return (
    <Container>
        <Wrapper>
            <Wraps>
                   <Image src="IMG-20220407-WA0034.jpg"/>

          
            <Text>
lkpiphgfi;;;;;;;;;;;;;;;;;;;;ciavfhwadfwjii
ikjdzgresuujnbcvlkjgc
hhtuyfzokhglijvcgyufxxgjkj
            </Text>
            
            </Wraps>
         
        </Wrapper>
    </Container>
  )
}

export default About
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;
align-items: center;




`
const Wrapper = styled.div`
height: 100vh;
width:100%;
display: flex;
justify-content: center;
/* flex-direction: column; */
flex-wrap: wrap;
/* align-items: center; */



`
const Image = styled.img`
width: 600px;object-fit:center;
@media (min-width:330px) and (max-width:430px){
    width: 330px;
  
}
`
const Text = styled.div`
width: 500px;

@media (min-width:330px) and (max-width:430px){
    width: 300px;
  
}

`
const Wraps = styled.div`

`
