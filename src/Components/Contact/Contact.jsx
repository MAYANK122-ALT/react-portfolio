import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/images/mail.png'
import phone_icon from '../../assets/images/phone.png'
import white_arrow from '../../assets/images/white-arrow.png'

const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "4a796ac8-d0ab-4418-8d4f-d359fa33466e");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };




    return (

    <>
      <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message.</h3>
            <p>Feel free to reach out through contact form or find my contact information below.</p>
            <ul>
                <li><img src= {mail_icon} alt='mail-icon'/>mayankaneja22@gmail.com</li>
                <li><img src= {phone_icon} alt='phone-icon'/>+91 8510885831</li>
            </ul>
        </div>
        <div className= 'contact-col'>
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your phone number' required/>
            <label>Write your message here</label>
            <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>
            <button className='btn3'>Submit Now <img src={white_arrow} alt='arrow-icon'/></button>
          </form>
          <span>{result}</span>
        </div>
    </div>
    </>
  )
}

export default Contact
