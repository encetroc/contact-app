import "./Contact.css";

export function Contact({ name, lastname, img, mobile }) {
  return (
    <div className="contact">
      <img className="img" src={img} alt={img} />
      <div className="info">
        <div>{`${name} ${lastname}`}</div>
        <div>{mobile}</div>
      </div>
    </div>
  );
}
