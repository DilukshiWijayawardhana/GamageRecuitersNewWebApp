import { MDBBtn } from 'mdb-react-ui-kit';

export default function ContactUs() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Us</h2>
        <h2>Hi, What’s your name</h2>
        <p className="text-lg">
          Let us know how to get back to you.        </p>
      </div>
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="name" className="contact--label">
            <span className="text-md"> Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="name"
              id="name"
              required
            />
          </label>
          <label htmlFor="company-name" className="contact--label">
            <span className="text-md">Company Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="company-name"
              id="company-name"
              required
            />
          </label>
          <label htmlFor="job-title" className="contact--label">
            <span className="text-md">Job Title</span>
            <input
              type="job-title"
              className="contact--input text-md"
              name="job-title"
              id="job-title"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="email" className="contact--label">
          <span className="text-md">email</span>
          <textarea
            className="contact--input text-md"
            id="email"
            rows="1"
            required
          />
        </label>

        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact--input text-md">
            <option>Select One...</option>
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <MDBBtn outline className='w-30 mb-4 ' size='md' style={{ fontSize: '1rem' }}>Submit</MDBBtn>
        </div>
      </form>
    </section>
  );
}
