import { useState } from "react";
import "./Contact.css";

export function Contact({ name, lastname, img, mobile, adresse }) {
  const [show, setShow] = useState();

  const handleShow = () => {
    setShow((previousShow) => {
      return !previousShow;
    });
  };

  return (
    <div className="contact_container">
      {/* the main contact info */}
      <div className="contact" onClick={handleShow}>
        <img className="img" src={img} alt={img} />
        <div className="info">
          <div>{`${name} ${lastname}`}</div>
          <div>{mobile}</div>
        </div>
      </div>
      {/* the extra info block */}
      {show && (
        <div className="extra_block">
          <div>{adresse}</div>
          <button>delete</button>
        </div>
      )}
    </div>
  );
}
