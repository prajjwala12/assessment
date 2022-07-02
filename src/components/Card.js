import React from "react";
 
function Card(props) {
  return (
    <>
      <div className="card-body">
        <img src={props.img} class="card-image" />
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
    </div>
{/* <div className="download">
Download the brochure to know more
</div> */}
</>
  );
}

export default Card;

