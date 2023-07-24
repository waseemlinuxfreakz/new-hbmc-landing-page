import { Link } from "react-router-dom";
import "./Contact.css";
import Select from "react-select";

const Contact = () => {
  const options = [
    { value: "City 01", label: "City 01" },
    { value: "City 02", label: "City 02" },
    { value: "City 03", label: "City 03" },
    { value: "City 04", label: "City 04" },
    { value: "City 05", label: "City 05" },
    { value: "City 06", label: "City 06" },
  ];

  const purposeOpt = [
    { value: "Connection", label: "Connection " },
    { value: "Normal talk", label: "Normal talk" },
    { value: "Business Idea", label: "Business Idea" },
    { value: "Investment", label: "Investment" },
    { value: "Grow Company", label: "Grow Company" },
    { value: "Project", label: "Project" },
    { value: "Others", label: "Others" },
  ];

  return (
    <section className="contact-section py-12 lg:py-20" id="contact">
      <div className="site-container">
        <div className="row">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 ">
            <div className="map-area" style={{ minHeight: 400 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387198.04724410514!2d-74.60284524235009!3d40.69633363874366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1686566930329!5m2!1sen!2sbd"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border rounded-lg"
                height="500"
              ></iframe>
            </div>

            <div className="contact-area">
              <div className="form">
                <form>
                  <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                    <div className="single-form-item">
                      <label htmlFor="name">
                        name <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full name"
                        required
                      />
                    </div>
                    <div className="single-form-item">
                      <label htmlFor="city">
                        City <span className="req">*</span>
                      </label>
                      <Select
                        options={options}
                        placeholder="Select city"
                        required
                        inputId="city"
                      />
                    </div>
                  </div>

                  <div className="single-form-item">
                    <label htmlFor="email">
                      Email <span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="single-form-item purpose">
                    <label htmlFor="purpose">purpose</label>
                    <Select
                      options={purposeOpt}
                      placeholder="Your purpose"
                      required
                      inputId="purpose"
                    />
                  </div>

                  <div className="single-form-item">
                    <label htmlFor="message">
                      Message <span className="req">*</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="3"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div className="single-form-item">
                    <input type="checkbox" id="agree" />{" "}
                    <label htmlFor="agree" className="font-light">
                      I agree with your{" "}
                      <Link to="#" className="text-sky-500">
                        Trams & Condetion
                      </Link>
                    </label>
                  </div>

                  <div className="single-form-item">
                    <button className="site-btn">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
