import React, { useState } from "react";
import "./Contact.css";
import { toast } from "react-toastify";
import "./Contact.css";
const Bot_Token = "6877779800:AAHAPesR6iXzhC75G5VTwM1F0FhIVYTvYJw";
const Chat_Id = "-1002070275549";
let initialState = {
  fname: "",
  email: "",
  comment: "",
};
function Contact() {
  let [data, setData] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    let text = "Bog'lanish %0A%0A";
    text += `To'liq Ismi: ${data.fname} %0A`;
    text += `Email: ${data.email} %0A`;
    text += `Qo'shimcha: ${data.comment}`;
    let url = `https://api.telegram.org/bot${Bot_Token}/sendMessage?chat_id=${Chat_Id}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    setData(initialState);
    toast.success("Thank you");
  };
  return (
    <div id="contact" className="f">
      <div className="container">
        <div className="f1">
          <h1>Хотите веб-сайт?</h1>
          <p>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века.
          </p>
          <form onSubmit={handleSubmit} action="">
            <div className="f2">
              <input
                value={data.fname}
                onChange={(e) =>
                  setData((p) => ({ ...p, fname: e.target.value }))
                }
                required
                type="text"
                placeholder="Ваше имя"
              />
              <input
                value={data.email}
                onChange={(e) =>
                  setData((p) => ({ ...p, email: e.target.value }))
                }
                required
                type="email"
                placeholder="Ваш e-mail"
              />
            </div>
            <textarea
              value={data.comment}
              onChange={(e) =>
                setData((p) => ({ ...p, comment: e.target.value }))
              }
              required
              name=""
              id=""
              placeholder="Сообщение"
            ></textarea>
            <button>ОТПРАВИТЬ</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
