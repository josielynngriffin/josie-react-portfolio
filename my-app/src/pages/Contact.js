import React, { useState } from 'react';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
      }
      
      /*console.log(formState);

      function handleSubmit(e) {
        //e.preventDefault();
        console.log(formState);
      }*/
    return (
        <div className="contact-page__wrapper">
            <section className="contact__blurb">
                <h1 className="contact__title"><span className="title__break">|</span> contact me</h1>
                <p>I’m always interested in chatting through feedback, design challenges, and opportunities to collaborate!</p>
                <p>Get in touch with me by sending a message, connect with me on LinkedIn, or follow my development on GitHub. </p>
                <a href="https://github.com/josielynngriffin"><i className="portfolio__icon fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/josiegriffin/"><i className="portfolio__icon fa-brands fa-linkedin"></i></a>
                <a href="mailto: jelynngriffin@gmail.com" target="_blank" rel="noreferrer"><i className="portfolio__icon fa-solid fa-envelope"></i></a>


            </section>
            <section className="contact-form__container">
                <form id="contact-form" action="https://formspree.io/f/mdkgyjjn" method="POST">
                        <h2 class="contact-form__title">send me a message!</h2>
                        <label htmlFor="name">name
                        <input class="contact-form__input" type='text' name="name" defaultValue={name} onChange={handleChange} placeholder='first last' required/> </label>
                    
                        <label htmlFor="email">email *
                        <input class="contact-form__input" type="email" name="email" defaultValue={email} onChange={handleChange} placeholder='your@gmail.com' required/></label>
                    
                        <label htmlFor="message">your message *
                        <textarea class="contact-form__textarea" name="message" rows="5" defaultValue={message} onChange={handleChange} placeholder='message me about anything!' required /></label>
                    
                        <button className="contactForm__button" type="submit">submit<i class="fa-solid fa-paper-plane"></i></button>

                </form>
            </section>
        </div>
    );
}

export default Contact;