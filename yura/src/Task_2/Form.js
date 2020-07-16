import React from "react";
function Form({ name, surname, city, telephone, on_Input_Change }) {
  return (
    <form>
      <input
        required="true"
        type="text"
        value={name}
        name="name_Input_Value"
        placeholder="name"
        onChange={on_Input_Change}
      ></input>
      <input
        required="true"
        type="text"
        value={surname}
        name="surname_Input_Value"
        placeholder="surname"
        onChange={on_Input_Change}
      ></input>
      <input
        type="text"
        value={city}
        name="city_Input_Value"
        placeholder="city"
        onChange={on_Input_Change}
      ></input>
      <input
        required="true"
        type="text"
        value={telephone}
        name="telephone_Input_Value"
        placeholder="telephone"
        onChange={on_Input_Change}
      ></input>
    </form>
  );
}

export default Form;
