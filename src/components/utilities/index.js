import styled from 'styled-components';




export const InputContainer = styled.div
  ` background-color:white;
width:60%;
height:40px;
border:3px solid blue;
border-radius:10px;
display:flex;
align-items:center;
justify-content:space-between;
padding-left:5px;
padding-right:5px;



`;


export const UserInput = styled.input`
  background-color:white;
  width:300px;
  outline:none;
/*   border:2px solid blue; */
border:none;
  height:40px;
  border-radius:10px;
  padding-left:10px;
  font-size:20px;
  flex:1;
  
`;
export const Button = styled.button`
  
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
    cursor:pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


export const InputHeroContainer = styled.div`

    display:flex;
    align-items:center;
    justify-content:center;
    row-gap:10px;
/*    width:80%; */
   border-radius:10px;
    padding:10px;
    flex-direction:column;
    background-color: #8F00FF
    
    


`;
