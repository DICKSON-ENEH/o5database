import React from 'react'
import styled from "styled-components"

const Result = () => {
  return (
    <Container>
        <Wrapper>
            <Name>
john Doe
            </Name>
            <Image>
<img src="/logo192.png"/>
            </Image>
            <Post>

            </Post>
        </Wrapper>
    </Container>
  )
}

export default Result
const Container= styled.div`
width: 300px;
height: 200px;
color: #000;
border-radius: 20px;
margin-top: 30px;
background: white;
display: flex;
justify-content: content;
`
const Wrapper= styled.div`
width:280px;
`
const Name= styled.div``
const Image= styled.div`
width: 70px;
img{
    width: 100%;
}
`
const Post= styled.div``
