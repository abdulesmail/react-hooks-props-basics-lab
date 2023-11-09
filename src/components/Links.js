import react from "react";

function link (props) {
  return (
    <div id="links">
      <h3>Links</h3>
      <ul>
        <li>
          <a href={props.github}>{props.github}</a>
          </li>
          <li>
          <a href={props.linkedin}>{props.linkedin}</a>
          </li>
       </ul>
    </div>
  );
}

export default link;