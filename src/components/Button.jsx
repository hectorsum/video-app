import React from 'react';

const Button = (props) =>{
  const { text,text2 } = props;
  return (
    <>
      <button className="myButton">{ text }</button>
      <button className="myButton">{ text2 }</button>
    </>
  )
}

export default Button;