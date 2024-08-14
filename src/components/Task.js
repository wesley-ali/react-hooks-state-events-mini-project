import React from "react";

export default function Task({ text, task, category, click }) {
  return (
    <div className="task">
       {/* <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
            <button className="delete">X</button> */}
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => click(task)}>
        X
      </button>
    </div>
  );
}

