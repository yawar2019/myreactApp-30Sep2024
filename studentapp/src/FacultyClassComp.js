import React, { Component } from "react";
 

export   class FacultyClassComp extends Component
{

  render() 
  {
     return(
    <>
     <h1>Hi my name is {this.props.name} and in Neet I got {this.props.marks} marks</h1>
     
     </>
    )
  }
}