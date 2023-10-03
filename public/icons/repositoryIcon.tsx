import React from 'react'

export default function HomeLine({
  size = 24, // or any default size of your choice
  color = "white" // or any color of your choice
}) {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 24 24"
    //   width={size} // added size here
    //   height={size} // added size here
    //   fill={color} // added color here
    // >
    //   {/* <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"/> */}
    //   <path d="M320 256h-64v64h64V256zM320 128h-64v64h64V128zM704 0H64C64 0 0 0 0 64v768c0 64 64 64 64 64h128v128l96-96 96 96V896h320c0 0 64-1.125 64-64V64C768 0 704 0 704 0zM704 768c0 61.625-64 64-64 64H384v-64H192v64h-64c-64 0-64-64-64-64v-64h640V768zM704 640H192V64h513L704 640zM320 512h-64v64h64V512zM320 384h-64v64h64V384z"/>
    // </svg>
<svg viewBox="0 0 24 24" 
width={size} // added size here
  height={size} // added size here
  fill={color} // added color here
xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v24h-24z" fill="none"/><path d="m13 21v2.5l-3-2-3 2v-2.5h-.5a3.5 3.5 0 0 1 -3.5-3.5v-12.5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1 -1 1zm0-2h6v-3h-12.5a1.5 1.5 0 0 0 0 3h.5v-2h6zm6-5v-10h-13v10.035a3.53 3.53 0 0 1 .5-.035zm-12-9h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2z"/></svg>  )
}