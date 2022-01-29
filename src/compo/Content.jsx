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
          <p className="contactP">Name</p>
          <input
            className="inputContact"
            placeholder="Write your name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </form>

        <form className="emailForm">
          <p className="contactP">Email</p>
          <input
            className="inputContact"
            placeholder="Write your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </form>

        <form className="phoneForm">
          <p className="contactP">Phone</p>
          <input
            className="inputContact"
            placeholder="Write your phone number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          ></input>
        </form>
      </div>

      <div className="con2">
        <form>
          <p className="contactPM">Message</p>
          <textarea
            className="textareaContact"
            rows={20}
            cols={80}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
          <div className="btnConContent">
            <button onClick={onSubmitForm} className="contactBtn">
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Content;
