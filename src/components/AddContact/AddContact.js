import { useState } from "react";
import { v4 } from "uuid";
import "./AddContact.css";

export function AddContact({ setContacts }) {
  // variable for holding the imput values
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobile, setMobile] = useState("");
  const [adresse, setAdresse] = useState("");

  // function to handle the input changes
  const handleInputs = (inputName, event) => {
    switch (inputName) {
      case "img":
        setImg(event.target.value);
        break;
      case "name":
        setName(event.target.value);
        break;
      case "lastname":
        setLastname(event.target.value);
        break;
      case "mobile":
        setMobile(event.target.value);
        break;
      case "adresse":
        setAdresse(event.target.value);
        break;
      default:
        break;
    }
  };
  // function to handle the form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    // setContacts function coming from the parent component
    setContacts((contacts) => {
      return [
        ...contacts,
        {
          id: v4(),
          img,
          name,
          lastname,
          mobile,
          adresse,
        },
      ];
    });
  };
  return (
    <form onSubmit={handleSubmit} className="contact_form">
      <input value={img} onChange={(event) => handleInputs("img", event)} />
      <input value={name} onChange={(event) => handleInputs("name", event)} />
      <input
        value={lastname}
        onChange={(event) => handleInputs("lastname", event)}
      />
      <input
        value={mobile}
        onChange={(event) => handleInputs("mobile", event)}
      />
      <input
        value={adresse}
        onChange={(event) => handleInputs("adresse", event)}
      />
      <button type="submit">Create contact</button>
    </form>
  );
}
