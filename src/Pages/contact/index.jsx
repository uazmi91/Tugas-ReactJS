import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";

export default function Contact() {
  return (
    <>
      <Header />
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
            <div className="col-md-6 mb-4">
              <h5>Contact Information</h5>
              <p><strong>Address:</strong> Jl. Contoh No. 123, Jakarta</p>
              <p><strong>Email:</strong> support@reactjs.com</p>
              <p><strong>Phone:</strong> +62 812-3456-7890</p>
              <div className="mt-4">
                <iframe
                  className="w-100 rounded shadow"
                  height="300"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!..."
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
