import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("Success! Email sent.");
          form.current.reset();
        },
        (error) => {
          console.log("Something went wrong:", error.text);
        }
      );
  };

  return (
    <div className="bg-pink-100 p-4 sm:p-2 max-w-lg mx-auto rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Contact Me</h2>
      <p className="mb-6 text-gray-700">
        Want to get in contact? Say hi! Let me know.
      </p>

      <form ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex flex-col">
            <label htmlFor="firstName" className="mb-1 font-medium">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="first_name"
              placeholder="Enter first name"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <label htmlFor="lastName" className="mb-1 font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="last_name"
              placeholder="Enter last name"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="email" className="mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col mt-4">
          <label htmlFor="message" className="mb-1 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="mt-6 bg-pink-500 text-white font-semibold px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};


export default ContactForm