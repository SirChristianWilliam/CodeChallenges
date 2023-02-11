import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./JavaScript.css";
function JavaScript() {
  let str = "Hello World";
  const answer1 = () => {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] == str[i].toUpperCase()) {
        newStr += str[i].toLowerCase();
      } else if (str[i] == str[i].toLowerCase()) {
        newStr += str[i].toUpperCase();
      }
    }
    return newStr;
  };

  return (
    <main>
      <p className="descriptionContainer">
        {" "}
        Return any given string but if the letter is uppercase, change it to
        lowercase, and if it's lowercase, change it to uppercase.
        <br></br>
        <br></br>
        Example: "Hello World => hELLO wORLD"
      </p>

         <p>Answer = {answer1(str)}</p>

        <pre className="answerContainer">
          {`
let str = "Hello World"
const answer1 = () => {
let newStr = "";

for(let i=0; i < str.length; i++) {
    if(str[i] == str[i].toUpperCase()) {
    newStr+=str[i].toLowerCase();
    } else if(str[i] == str[i].toLowerCase()) {
newStr+=str[i].toUpperCase();}}
return newStr;}
`}
        </pre>
     </main>
  );
}

export default JavaScript;
