import React, { useState, useEffect } from "react";
import "./style.css";
import "./content.css";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";

const Content = () => {
  useEffect(() => {
    init("user_LsnuRW8fE2OFM9DiT4AXQ");
  }, []);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmitForm = (event) => {
    event.preventDefault();

    let mail = {
      to_name: "juhyoung Ryu",
      from_name: name,
      message: message,
      phone: phone,
      mail: email,
    };

    console.log(mail);
    alert("Sent");
    emailjs
      .send("juhyoungMailService", "template_qqz36ip", mail)
      .then((res) => {
        console.log(res.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="Content">
      <div className="con1">
        <form className="nameForm">
          <p>Name</p>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </form>

        <form className="emailForm">
          <p>Email</p>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </form>

        <form className="phoneForm">
          <p>Phone</p>
          <input
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          ></input>
        </form>
      </div>

      <div className="con2">
        <form>
          <p>Message</p>
          <textarea
            rows={30}
            cols={80}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
          <div className="btnConContent">
            <button onClick={onSubmitForm}>SEND MESSAGE</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Content;
