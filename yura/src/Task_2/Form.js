import React from "react";
function Form() {
  return (
    <form>
      <input
        required="true"
        type="text"
        name="name_Input_Value"
        placeholder="name"
      ></input>
      <input
        required="true"
        type="text"
        name="surname_Input_Value"
        placeholder="surname"
      ></input>
      <input type="text" name="city_Input_Value" placeholder="city"></input>
      <input
        required="true"
        type="text"
        name="telephone_Input_Value"
        placeholder="telephone"
      ></input>
    </form>
  );
}

export default Form;
