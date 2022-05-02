import React, {useState, useEffect}from 'react'
import styled from 'styled-components'
import {stores, databs} from "../../fire/Fire"  
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage"
import{useNavigate} from 'react-router-dom'

import{collection, addDoc} from 'firebase/firestore'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Create= ()=>{
    const navigator=useNavigate()
    const [name, setName] = useState("")
    const [descript, setDescript]= useState("")
    const [avatar, setAvatar] = useState("")
     const imageUpload= async(e)=>{
         const file= e.target.files[0];
         const fileRef= ref(stores, "/images", +file.name)
         const storageRef = uploadBytesResumable(fileRef, file)
         getDownloadURL(storageRef.snapshot.ref).then((url)=>{
             setAvatar(url)
         })
     }
     const submit =async()=>{
       await   addDoc(collection(databs, "forstudents"),{
             name,
             descript,
             avatar: await avatar
         })
         setName("")
         setDescript("")
         setAvatar("")
         navigator("/o5datas")

     }

     useEffect(()=>{
Aos.init({duration:2000})
     },{})
    return(
<Container>
    <Wrapper data-aos="fade-down">
       <h3> fill in details😀</h3>
        <Image onChange={imageUpload} type ="file" />

        
        <Name placeholder="name"
        value={name}
        onChange={(e)=>{
            setName(e.target.value)
        }}
        />
        <Bio placeholder="description"
         value={descript}
         onChange={(e)=>{
             setDescript(e.target.value)
         }}
        />
        <button onClick ={submit} >
              Submit
            </button>
        
    </Wrapper>
</Container>
    )
}

export default Create

const Container = styled.div`
background-image: url("/bg.jpeg");
width:100%;
height: 100vh;
background-repeat: no-repeat;
background-position: center;
background-size: cover;
display: flex;
justify-content: center;
align-items: center; 
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding:40px 40px;
background: white;
border-radius: 10px;
button{
  padding: 13px 50px;
  margin-top: 30px;
  border: none;
  outline: none;
  border-radius:20px;
  background: #2D62F0;
  color :white ;
  opacity: 0.8;
  :hover{
    opacity: 1;
    cursor: pointer;
    transform: scale(1.05);
    transition: all 300ms;
  }

}
:hover{
    transform: scale(1.05);
    transition: all 300ms;
}
@media(min-width: 330px) and (max-width:430px){
  padding: 30px 30px;
}
@media(max-width:320px){
  padding: 20px 20px;
}

`
const Name = styled.input`
width:300px;
padding: 10px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
border:none;
outline: none;
border-radius: 5px;
:hover{
    transform: scale(1.1);
    transition: all 300ms;
}
@media(min-width: 330px) and (max-width:430px){
  width: 250px;
}
@media(max-width:320px){
  width: 230px;
}
`
const Bio = styled.input`
width: 300px;
height: 200px;
padding: 10px;
margin-top: 20px;
border-radius: 5px;

box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
border:none;
outline: none;
:hover{
    transform: scale(1.1);
    transition: all 300ms;
}
@media(min-width: 330px) and (max-width:430px){
  width: 250px;
}
@media(max-width:320px){
  width: 230px;
}

`
const Image = styled.input`
width:300px;
padding: 10px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
border:none;
outline: none;
border-radius: 5px;
margin-bottom:10px;
:hover{
    transform: scale(1.1);
    transition: all 300ms;
}
@media(min-width: 330px) and (max-width:430px){
  width: 250px;
}
@media(max-width:320px){
  width: 230px;
}
`