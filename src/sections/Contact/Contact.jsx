import { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import {
  RiMailLine,
  RiGithubLine,
  RiLinkedinBoxLine,
  RiSendPlaneLine,
  RiCheckLine,
  RiErrorWarningLine,
} from 'react-icons/ri';
import styles from './Contact.module.css';

const initialForm = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email address';
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    else if (form.message.trim().length < 20) errs.message = 'Message must be at least 20 characters';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus('sending');

    // EmailJS integration placeholder
    // To activate: npm install @emailjs/browser
    // Then replace with:
    // import emailjs from '@emailjs/browser';
    // await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY');

    // Simulating send for demo:
    setTimeout(() => {
      setStatus('success');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <SectionTitle
          eyebrow="Contact"
          title="Let's Connect"
          subtitle="Have an opportunity, project, or just want to talk tech? I'd love to hear from you."
        />

        <div className={styles.layout}>
          {/* Left: info */}
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Get In Touch</h3>
              <p className={styles.infoText}>
                I'm currently open to internship opportunities and collaboration.
                Whether you have a role in mind, a project idea, or just want to
                connect — send me a message!
              </p>

              <div className={styles.contacts}>
                <a href="mailto:harshithkumarpathipaka@email.com" className={styles.contactItem}>
                  <span className={styles.contactIcon}><RiMailLine size={18} /></span>
                  <div>
                    <span className={styles.contactLabel}>Email</span>
                    <span className={styles.contactValue}>harshithkumarpathipaka@email.com</span>
                  </div>
                </a>
                <a
                  href="https://github.com/HarshithPathipaka-Git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactItem}
                >
                  <span className={styles.contactIcon}><RiGithubLine size={18} /></span>
                  <div>
                    <span className={styles.contactLabel}>GitHub</span>
                    <span className={styles.contactValue}>github.com/HarshithPathipaka-Git</span>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/harshithpathipaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactItem}
                >
                  <span className={styles.contactIcon}><RiLinkedinBoxLine size={18} /></span>
                  <div>
                    <span className={styles.contactLabel}>LinkedIn</span>
                    <span className={styles.contactValue}>linkedin.com/in/harshithpathipaka</span>
                  </div>
                </a>
              </div>
            </div>

            <div className={styles.availability}>
              <span className={styles.availDot} />
              <span>Available for internships &amp; part-time roles</span>
            </div>
          </div>

          {/* Right: form */}
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Praveen"
                  value={form.name}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Praveen@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                value={form.subject}
                onChange={handleChange}
                className={`${styles.input} ${errors.subject ? styles.inputError : ''}`}
              />
              {errors.subject && <span className={styles.error}>{errors.subject}</span>}
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about yourself, the opportunity, or just say hi..."
                value={form.message}
                onChange={handleChange}
                className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
              />
              {errors.message && <span className={styles.error}>{errors.message}</span>}
            </div>

            {status === 'success' && (
              <div className={styles.successMsg}>
                <RiCheckLine size={18} />
                Message sent! I'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className={styles.errorMsg}>
                <RiErrorWarningLine size={18} />
                Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              className={`btn btn-primary ${styles.submitBtn}`}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>
                  <span className={styles.spinner} />
                  Sending...
                </>
              ) : (
                <>
                  <RiSendPlaneLine size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
