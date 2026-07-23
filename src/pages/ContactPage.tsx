import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const message = formData.get('message') || '';

    const recipient = 'satauheed.business2@gmail.com';
    const subject = encodeURIComponent(`Portfolio Contact Form Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div>
      <div className="page-hero">
        <div className="wrap">
          <p className="eyebrow">— CONTACT</p>
          <h1>Got a project in mind?<br />Let's talk about it.</h1>
          <p>
            Whether you have a specific project ready to build or just want to explore ideas, I'm always open to discussing new opportunities.
          </p>
        </div>
      </div>

      <section style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        <div className="wrap">
          <div className="contact-grid">
            {/* LEFT CONTACT INFO */}
            <div className="contact-info">
              <div className="item">
                <b>EMAIL</b>
                <a href="mailto:satauheed.business2@gmail.com">
                  satauheed.business2@gmail.com
                </a>
              </div>

              <div className="item">
                <b>PHONE</b>
                <a href="tel:9014843345">
                  +91 90148 43345
                </a>
              </div>

              <div className="item">
                <b>AVAILABILITY</b>
                <span>
                  Open for Work & Freelance
                </span>
              </div>
            </div>

            {/* RIGHT FORM WITH VISIBLE UNDERLINE INPUTS */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field">
                <label>NAME</label>
                <input type="text" name="name" placeholder="Your name" required />
              </div>

              <div className="field">
                <label>EMAIL</label>
                <input type="email" name="email" placeholder="hello@yourcompany.com" required />
              </div>

              <div className="field">
                <label>MESSAGE</label>
                <textarea name="message" rows={4} placeholder="Tell me about your project..." required></textarea>
              </div>

              <button type="submit" className="btn btn-vermilion" style={{ marginTop: 24 }}>
                Send Message <ArrowRight size={16} />
              </button>

              {submitted && (
                <div className="form-note-success">
                  <CheckCircle2 size={20} color="#0B7247" />
                  <span>Opening mail app... Message sent directly to satauheed.business2@gmail.com!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
