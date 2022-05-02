import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {collection, onSnapshot} from "firebase/firestore"
import {databs} from "../fire/Fire"
import Aos from 'aos'
import "aos/dist/aos.css"


const Overview = () => {

    const [views, setViews]= useState([])
const snapping = async()=>{
    const datas = await collection(databs,("reviews"))

    onSnapshot(datas,(mysnap)=>{
   const r = []

   mysnap.forEach((el)=>{
r.push({...el.data(), el:el.id})
   })
   setViews(r)
    })
}
    useEffect(()=>{
snapping()
    }, [])
    useEffect(()=>{
Aos.init({duration:2000})
    },[])
  return (
<Container>
    <Wrapper>
      <Head>
     <Link to ="/review">  <button>Create</button></Link> 
      </Head>
        <Hold>
            
            {views?.map((props)=>(
    <Card key ={props.id} data-aos="fade-right">
    <Cardwrap>
        <span>
        <Name>
{props.name}
        </Name>
      
     
        </span>
        <Bio>
{props.descript}
        </Bio>
      <Div>  thank you we appreciate😎</Div>
    </Cardwrap>
</Card>
            ))}
    
        
        </Hold>
    </Wrapper>
</Container>
  )
}

export default Overview

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width:100%
`
const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center
`
const Card = styled.div`
width: 320px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
margin-top:20px;
border-radius:5px;
margin-left:15px;
height:100%;


`
const Cardwrap = styled.div`
width: 250px;
display: flex;
flex-direction: column;
justify-content: center;
padding: 5px;
margin:auto;
height:100%;
span{
  display:flex;
  justify-content:space-between;
  align-items:center
}

`
const Name = styled.div`
font-weight:bold;
margin-bottom:10px

`
const Image = styled.img`
width:40px;
height:40px;
border-radius:50%


`
const Bio = styled.div`
margin-bottom:10px
`
const Hold = styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(0, 1fr));
margin-top: 20px;
margin-left: 20px;
grid-gap:45px;
grid:25px;
@media(min-width:330px) and (max-width:430px){
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-gap:25px;
grid:25px;
margin-right:50px


}
`
const Head = styled.div`
background:#2D62F0;
height:70px;
width:100%;
display:flex;

justify-content:center;
align-items:center;
button{
  padding:10px 30px;
  border-radius:20px;
  border:none;
  outline:none;
}
@media(min-width:330px) and (max-width:430px){
  width:100%;
  
}

`
const Div = styled.div`
font-size:10px;
margin-left:100px;
font-weight:bold
`