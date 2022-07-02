import React from "react";

export default function Form() {
  return (
    <>
      <div className="form-stuff">
        <div className="heading">
          <h1>Want to know more about how to prepare?</h1>
        </div>
        <form>
          <div className="form-placeholders">
            <input placeholder="Name" />

            <input placeholder="Email" />

            <input placeholder="Phone" />
          </div>
          <br />
          <button className="button-style">Start Your Prep Now </button>
        </form>
      </div>
    </>
  );
}
