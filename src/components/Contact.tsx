"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const formErrors = {
      fullName: "",
      email: "",
      phone: "",
      message: "",
      subject: "",
    };
    let isValid = true;

    if (!formData.fullName) {
      formErrors.fullName = "Full Name is required";
      isValid = false;
    }

    if (!formData.email) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = "Phone number must be 10 digits";
      isValid = false;
    }

    if (!formData.message) {
      formErrors.message = "Message is required";
      isValid = false;
    }

    if (!formData.subject) {
      formErrors.subject = "Subject is required";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
          subject: "",
        });
        setErrors({
          fullName: "",
          email: "",
          phone: "",
          message: "",
          subject: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("error");
    }
  };

  return (
    <div id="contact" className="group transition-all duration-300 ease-in-out">
      <h2 className="text-lg font-medium group-hover:bg-white/[0.025] transition-all duration-300 ease-in-out rounded-lg px-3.5 py-2 mb-1">
        Contact
      </h2>
      <div className="flex flex-col gap-4 text-white/50 group-hover:text-white/60 text-sm bg-white/[0.025] transition-all duration-300 ease-in-out rounded-lg p-3.5">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="fullName" className="text-xs">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleInputChange}
              className="bg-transparent placeholder-white/50 outline-none border border-white/5 hover:border-white/15 focus:border-white/15 transition-all duration-300 ease-in-out rounded-md px-3 py-2"
              required
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs">{errors.fullName}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-xs">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@gmail.com"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-transparent placeholder-white/50 outline-none border border-white/5 hover:border-white/15 focus:border-white/15 transition-all duration-300 ease-in-out rounded-md px-3 py-2"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-xs">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="9194563567"
              value={formData.phone}
              onChange={handleInputChange}
              className="bg-transparent placeholder-white/50 outline-none border border-white/5 hover:border-white/15 focus:border-white/15 transition-all duration-300 ease-in-out rounded-md px-3 py-2"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="subject" className="text-xs">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject of the message"
              value={formData.subject}
              onChange={handleInputChange}
              className="bg-transparent placeholder-white/50 outline-none border border-white/5 hover:border-white/15 focus:border-white/15 transition-all duration-300 ease-in-out rounded-md px-3 py-2"
              required
            />
            {errors.subject && (
              <p className="text-red-500 text-xs">{errors.subject}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-xs">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Hello, I'm interested in your work!"
              value={formData.message}
              onChange={handleInputChange}
              className="bg-transparent placeholder-white/50 outline-none border border-white/5 hover:border-white/15 focus:border-white/15 transition-all duration-300 ease-in-out rounded-md px-3 py-2"
              required
            />
            {errors.message && (
              <p className="text-red-500 text-xs">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full border-2 border-white/5 bg-white/10 hover:bg-white/0 hover:border-white/10 transition-all duration-300 ease-in-out rounded-md text-sm text-center p-2"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="text-green-500 text-xs mt-2">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-xs mt-2">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
