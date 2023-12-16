import React,{useState} from 'react'
// import { emailvalidation } from '../helpers/emailvalidation';
import emailjs from '@emailjs/browser';

const EmailForm =() => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


const handleSubmit = async (e) => {
  e.preventDefault();

  try {

  const serviceId = "service_m9egudd"; 
  const templateId = "template_qn6egp8";
  const publicKey="KOVbFIITZLJXsJIfs";
//template params
  const templateParams = {  
  from_name: name,
  from_email: email,
  from_subject: subject,
  message:message,
};
const response = await emailjs.send(serviceId,templateId, templateParams,publicKey); //send the email using EMailjs
alert('Email sucessfully sent!', response);

  } catch(err) {
    console.log('Error sending email:', err)
    setEmail('');
    setMessage('');
    setName('');
    setSubject('');
  }
};

  return (
    <div className="max-w-[1000px] bg-[rgb(243,243,243)] flex justify-center ">
      <h1 className="text-indigo-500 text-4xl text-center mt-15 ">Contact Me</h1>
      <form onSubmit={handleSubmit} className="pt-20 mx-10 mt-0 ">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            User
          </label>
          <input
            className="shadow appearance-none border rounded w-70% py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            className="shadow appearance-none border border-red-500 rounded w-70% py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Subject
          </label>
          <input
            className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Message
          </label>
          <input
            id="message"
            className="box-content h-32 w-60  p-6 shadow appearance-none border-2 rounded w-90% py-1 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div class="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 mt-1 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );

  };

export default EmailForm;

