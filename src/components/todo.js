import React from 'react'
import todo from '../project-images/todo.gif'

function Todo (){
  return (
    <div className="project-card">
    <img src={todo}></img>
    <h2 className="projectName">ToDo</h2>
    <h4 className="project-description">A simple yet elegant front-end forward application designed for users to make an easy and efficient to-do list for completing daily tasks.</h4>
    <h5 className="software">Stack:</h5>
    <h5 className="softwares">TypeScript React CustomCSS React-Beautiful-DnD</h5>
    <br></br>
    <div className="buttons">
      <a className="reference-link1" href="https://github.com/keeganmcroberts/TypeScript-Project" target="_blank">Code</a>
      <a className="reference-link2" target="_blank">Demo</a>
    </div>
</div>
  )
}

export default Todo
