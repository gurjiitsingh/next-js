import { useState, useRef } from "react";
import classes from "./contact-form.module.css";

const ContactForm = () => {
const [ enteredEmail, setEnteredEmail ] = useState('');
const [ enteredName, setEnteredName ] = useState('');
const [ enteredMessage, setEnteredMessage ] = useState('');
  
function formSubmitHandler(e) {
    e.preventDefault();
    
    fetch('/api/contact',{
        method:'POST',
        body:JSON.stringify({
            email: enteredEmail,
            name: enteredName,
            message: enteredMessage
        }),
        headers:{
            'Content-Type': 'application/json'
        },
    })
               
    
  }

  return (
    <section className={classes.contact}>
      <h1>How can i help you</h1>
      <form onSubmit={formSubmitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required 
            value={enteredEmail}
            onChange={(event)=>setEnteredEmail(event.target.value)}

            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="name" id="name" required 
            value={enteredName}
            onChange={(event)=>setEnteredName(event.target.value)}

            />
          </div>

          <div className={classes.control}>
            <label htmlFor="message">Your message</label>
            <textarea id="message" row="5" 
            value={enteredMessage}
            onChange={(event)=>setEnteredMessage(event.target.value)}

            ></textarea>
          </div>

          <div className={classes.action}>
            <button>Send Message</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
