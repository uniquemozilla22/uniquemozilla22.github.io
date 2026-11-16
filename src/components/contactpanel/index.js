import React, { useEffect, useState } from "react";
import { sendContactEmail } from "../../lib/sendContact";
import "./style.css";

const STARTER = "Hey Yogesh, I wanna connect!";

const ContactPanelContext = React.createContext(null);

export function ContactPanelProvider({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <ContactPanelContext.Provider value={{ openPanel: () => setOpen(true) }}>
      {children}
      {open ? <ContactPanel onClose={() => setOpen(false)} /> : null}
    </ContactPanelContext.Provider>
  );
}

export function useContactPanel() {
  return React.useContext(ContactPanelContext);
}

function ContactPanel({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState(STARTER);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    const trimmedMessage = message.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();
    const trimmedName = name.trim();

    if (!trimmedMessage) {
      setError("Write a message.");
      return;
    }
    if (!trimmedEmail && !trimmedPhone) {
      setError("Add an email or a phone number.");
      return;
    }
    if (trimmedEmail && !/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
      setError("Enter a valid email.");
      return;
    }

    const detail = [
      trimmedEmail ? `Email: ${trimmedEmail}` : "",
      trimmedPhone ? `Phone: ${trimmedPhone}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    setLoading(true);
    sendContactEmail({
      from_name: trimmedEmail || trimmedPhone,
      user_name: trimmedName || trimmedEmail || trimmedPhone,
      message: `${trimmedMessage}\n\n${detail}`,
    }).then(
      () => {
        setLoading(false);
        setSuccess("Sent.");
      },
      (err) => {
        setLoading(false);
        setError(`Faild to send!,${err && err.text ? err.text : "error"}`);
      }
    );
  };

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="contact-panel-title">
      <button type="button" className="modal__backdrop" aria-label="Close" onClick={onClose} />
      <form className="modal__panel" onSubmit={handleSubmit}>
        <h2 id="contact-panel-title">Contact me</h2>
        <label>
          Message
          <textarea
            name="message"
            rows="4"
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
          />
        </label>
        <label>
          Phone
          <input
            name="phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            autoComplete="tel"
          />
        </label>
        <label>
          Name <span className="optional">optional</span>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
          />
        </label>
        {error ? <p className="form-error">{error}</p> : null}
        {success ? <p className="form-ok">{success}</p> : null}
        <div className="modal__actions">
          <button className="btn btn-fill" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
          <button className="btn btn-ghost" type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
