import React from 'react'
import Navbar from '../Navbar'

function Hoc(BaseComp) {
  return function enhancedcomponent(props){
    
    return <>
    <Navbar />
    <BaseComp {...props} />
    </>
  }
}

export default Hoc