import { useEffect, useState } from 'react'
import { CiUser } from 'react-icons/ci'
import { MdOutlineDataUsage } from 'react-icons/md'
import { InputHeroContainer, InputContainer, UserInput, Button } from './utilities'

const Input = ({ value, dispatch }) => {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {


    console.log(value);

  }, [value])


  const handleOnSubmit = () => {
   if (name === "") {
      dispatch({ type: "enter_all_value" });
      setTimeout(() => {
        dispatch({ type: "reset_err" });


      }, 3000)
      setAge(0);
      setName("");
      return;
    }
    
    
    
    if (age <= 0) {
      dispatch({ type: "invalid_age" });
      setTimeout(() => {
        dispatch({ type: "reset_err" });


      }, 3000)
      setAge(null);
      setName("");
      return;
    }
    

    dispatch({
      type: "add_user",
      payload: { name, age }
    })
    setAge(0);
    setName("");




  }





  return (
    <InputHeroContainer>
      <InputContainer>
        <CiUser />
        <UserInput placeholder='enter your name' value={name} onChange={(e) => {
          setName(e.target.value)
        }} />
      </InputContainer>
      <InputContainer>
        <MdOutlineDataUsage />
        <UserInput placeholder='your age' type='number' value={age} onChange={(e) => {
          setAge(e.target.value)
        }} />
      </InputContainer>
      <Button onClick={handleOnSubmit}>submit</Button>
    </InputHeroContainer>
  )



}

export default Input
