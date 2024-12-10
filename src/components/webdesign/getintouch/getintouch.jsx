import React, { useState } from "react";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    company: "",
    workEmail: "",
    phone: "",
    projectDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted", formData);
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-300 py-16 mt-12">
      <div className="container mx-auto px-6 lg:px-16 text-white">
        {/* Heading Section */}
        <div className="text-left mb-8">
          <h1 className="text-4xl font-bold mb-4">Get in touch and let’s get started.</h1>
          <p className="text-lg">
            Ready to take your business to the next level? Get in touch with us
            today, and let’s start crafting the perfect digital strategy for your
            brand. Our team at Marketiq Junction is eager to collaborate and
            provide tailored solutions that meet your unique needs.
          </p>
        </div>

        {/* Form Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left Section (Text) */}
          <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
            <h2 className="text-2xl font-semibold mb-4">Let’s Get Started</h2>
            <p className="text-lg">
              Don’t wait any longer—let’s embark on this journey together! Fill out the
              form to get started with your next digital transformation.
            </p>
          </div>

          {/* Right Section (Form) */}
          <div className="lg:w-1/2 w-full bg-white p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-semibold text-center mb-6">Get In Touch</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="p-3 border border-gray-300 rounded-md w-full text-black"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="p-3 border border-gray-300 rounded-md w-full text-black"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="Job Title"
                  className="p-3 border border-gray-300 rounded-md w-full text-black"
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company"
                  className="p-3 border border-gray-300 rounded-md w-full text-black"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="email"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  placeholder="Work Email"
                  className="p-3 border border-gray-300 rounded-md w-full text-black"
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="p-3 border border-gray-300 rounded-md w-full text-black"
                />
              </div>

              <div className="mb-4">
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder="Project Details/Inquiry"
                  className="p-3 border border-gray-300 rounded-md w-full text-black"
                  rows="4"
                ></textarea>
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700"
                >
                  Submit
                </button>
                <button className="bg-transparent text-blue-600 hover:text-blue-700 font-semibold border-2 border-blue-600 px-6 py-3 rounded-md">
                  Discover More
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
