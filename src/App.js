import { useState } from "react";
import "./App.css";
import { Contact } from "./components/Contact/Contact";

const contacts_db = [
  {
    id: "1",
    img: "https://play-lh.googleusercontent.com/D-haUsSx771Pt4brCyFEJUNKZaC8NUsD2bMB-ZL_yE2LnYdmt3YbgfZwDDM9B-wBHw",
    name: "john",
    lastname: "doe",
    mobile: "0611223344",
    adresse: "57 main st",
  },
];

function App() {
  // reactive variable contacts
  const [contacts, setContacts] = useState(contacts_db);
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
    setContacts((contacts) => {
      return [
        ...contacts,
        {
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
    <div className="container">
      {/* form for adding a new contact */}
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
      {/* list of contacts */}
      {contacts.map((contact) => {
        return (
          <Contact
            {...contact}
            /* img={contact.img}
            name={contact.name}
            lastname={contact.lastname}
            mobile={contact.mobile} */
          />
        );
      })}
    </div>
  );
}

export default App;
