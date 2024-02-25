import React from 'react'

const FormRow = ({type,name,placeholder}) => {
  return (
    <>
        <input type={type} 
                name={name} 
                placeholder={placeholder}
                required/>
    </>
         
  )
}

export default FormRow