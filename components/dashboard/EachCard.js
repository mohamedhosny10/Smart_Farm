import { useState } from "react";


function EachCard({ title, Data, time, date }) {
  function handleTextColours() {
    let textColorsClassName = []
    if (title.includes("Warning")) {
      textColorsClassName.push("text-warning")
    }
    else if (title.includes("Danger")) {
      textColorsClassName.push("text-danger")
    }
    else if (title.includes("Normal")) {
      textColorsClassName.push("text-primary")
    }
    return textColorsClassName
  }

  return (<>
    <div class="card my-3 shadow-lg text-center">
      <div class={"card-body "} >
        <div className="row ">
          <h5 className="col text-secondary">Time : {time}</h5>
          <h5 className="col text-secondary">Date : {date}</h5>
        </div>
        <i className={handleTextColours() + " " + "fa-solid fa-bell fa-2xl pb-4"}> </i>
        <h4 className={handleTextColours() + " " + "card-title  col"}>{title}</h4>
        <h1 className={handleTextColours()}>{Data}</h1>
      </div>
    </div >
  </>)
}
export default EachCard;