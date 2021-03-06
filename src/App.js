import { useState } from "react";
import "./App.css";
import { AddContact } from "./components/AddContact/AddContact";
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
  return (
    <div className="container">
      {/* form for adding a new contact */}
      {/* we are passing the setContacts function to a childe component */}
      <AddContact setContacts={setContacts} />
      {/* list of contacts */}
      {contacts.map((contact) => {
        return (
          <Contact
            // a key is a must if you are rendering new components from a list of values or array
            key={contact.id}
            {...contact}
            setContacts={setContacts}
            /* img={contact.img}
            name={contact.name}
            lastname={contact.lastname}
            mobile={contact.mobile}
            adresse={contact.adresse} */
          />
        );
      })}
    </div>
  );
}

export default App;
