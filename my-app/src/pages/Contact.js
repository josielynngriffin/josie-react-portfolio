import React, { useState } from 'react';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
      }
      
      console.log(formState);

      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }
    return (
        <div className="contact-page__wrapper">
            <section className="contact__blurb">
                <h1 className="contact__title"><span className="title__break">|</span> contact me</h1>
                <p>i’m always looking for more opportunities and to connect! get in touch with me anytime or follow my development on my socials below :) </p>
                <a href="https://github.com/josielynngriffin" target="_blank"><i className="portfolio__icon fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/josiegriffin/" target="_blank"><i className="portfolio__icon fa-brands fa-linkedin"></i></a>
                <a href="mailto: jelynngriffin@gmail.com" target="_blank"><i className="portfolio__icon fa-solid fa-envelope"></i></a>


            </section>
            <section className="contact-form__container">
                <form id="contact-form" action="form-process.php" onSubmit={handleSubmit}>
                    
                        <label htmlFor="name">name</label>
                        <input type='text' name="name" defaultValue={name} onChange={handleChange} placeholder='first last'/> 
                    

                    
                        <label htmlFor="email">email *</label>
                        <input type="email" name="email" defaultValue={email} onChange={handleChange} placeholder='your@gmail.com'/>
                    
                        <label htmlFor="message">your message *</label>
                        <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} placeholder='message me about anything!' />
                    
                        <button className="contactForm__button" type="submit">submit</button>

                </form>
            </section>
        </div>
    );
}

export default Contact;