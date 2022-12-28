import { useReducer, useState } from 'react'
import './App.css'
import Input from "./components/Input"
import { AgeReducer } from "./Reducer/AgeReducer"
import Details from "./components/Details"
import styled from 'styled-components'
import { Button } from './components/utilities'

export default function App() {


  const initialVal = {
    users: [],
    user: {},
    errCode: 0,


  }










  const [value, dispatch] = useReducer(AgeReducer, initialVal);



  const BackDrop = styled.div`


width:100%;
height:100vh;
overflow:hidden;

z-index:30;
position:fixed;
top:0;
left:0;
transition:1s ease;
background-color:rgba(0,0,0,0.75);
 display:flex;
 align-items:center;
 justify-content:center;
 
 
 
 `;
  const Modal = styled.div`

  width:300px;
  background-color:white;
  height:90px;
  border-radius:5px;
  display:flex;
  align-items:center;
  justify-content:center;
  row-gap:5px;
  flex-direction:column;
  padding-top:10px
  


`;



  // console.log(value);
  return (
    <main>

      error code is {value.errCode}
      <div>
        <Input value={value} dispatch={dispatch} />
      </div>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        columnGap: 5,
      rowGap:5,
      padding:5,
      }}>
        {value.users &&

          value.users.map((user, idx) => {
            return (<Details user={user} idx={idx} value={value} dispatch={dispatch} />)



          })

        }
      </div>


      <BackDrop style={{

        display: `${value.errCode !== 0 ?
          'flex' : 'none'}`



      }}>

        <Modal>
          {
            value.errCode === 1
              ? (<h1 style={{
                color: "red",
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                invalid age
              </h1>) :
              (<h1 style={{
                color: "yellow",
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'

              }}>
                enter all field.....
              </h1>)
          }

          <Button onClick={
            () => {
              dispatch({ type: "reset_err" })
            }
          }>
            okay
          </Button>
        </Modal>
      </BackDrop>
    </main>
  )
}
