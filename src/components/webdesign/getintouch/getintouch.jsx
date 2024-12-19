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
    <section className="bg-gradient-to-r from-[#4A9BD3] to-[#50C3C6] py-16 mt-8 lg:mb-28">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Text Section */}
          <div className="lg:w-1/2 w-full text-left">
            <h1 className="text-4xl font-bold text-white mb-4">
              Get in touch and let’s get started.
            </h1>
            <p className="text-lg text-white mb-4">
              Ready to take your business to the next level? Get in touch with us today, and let’s start crafting the perfect digital strategy for your brand. Our team at Marketiq Junction is eager to collaborate and provide tailored solutions that meet your unique needs.
            </p>
            <p className="text-lg text-white">
              Don’t wait any longer—let’s embark on this journey together! Fill out the form to get started with your next digital transformation.
            </p>
            <button className="bg-transparent text-white hover:text-blue-700 font-semibold border-2 border-white px-6 py-3 rounded-md mt-8">
                  Discover More
                </button>
          </div>

          {/* Right Form Section */}
          <div className="lg:w-1/2 w-full bg-white p-6 rounded-lg shadow-md border-t-8 border-[#3F85B5]">
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Get In Touch</h2>

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
                  className="bg-[#3F85B5] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 items-center"
                >
                  Submit
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
