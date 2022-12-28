import styled from "styled-components"
import { GiCancel } from "react-icons/gi"

const Details = ({ user, idx, value, dispatch }) => {


  const H1 = styled.h1`
  
   color: #111; font-family: 'Helvetica Neue', sans-serif; font-size: 15px; font-weight: bold; letter-spacing: -1px; line-height: 1; text-align: center;
   display:flex;
     align-items:center;
     column-gap:10px;
  `





  return (
    <div style={{
      width: '150px',
      height: 30,
      padding: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 4,



    }}>
      <H1> <div>{user.name} : {user.age}</div> <GiCancel style={{ color: "red", cursor: "pointer" }}
        onClick={() => {

          dispatch({ type: "delete_user", payload: idx })
        }}

      /></H1>


    </div>
  )


}

export default Details