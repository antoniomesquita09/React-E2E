import React, { useState } from 'react'
import './App.css';

const App = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [terms, setTerms] = useState(false)
  const [test, setTest] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Output:', { name, email, message, terms, test })
  }

  return (
    <div className="App">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="field">
          <div className="control">
            <label className="label">Full Name</label>
            <input name="fullname" type="text" placeholder="Full Name" className="input" value={name} onChange={e => setName(e.target.value)}/>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="label">Email Address</label>
            <input name="email" type="email" placeholder="Email Address" className="input" value={email} onChange={e => setEmail(e.target.value)}/>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="label">Message</label>
            <textarea className="textarea" placeholder="Message here" name="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input
                name="terms"
                type="checkbox"
                checked={terms}
                onChange={e => setTerms(e.target.checked)}
              />
              I agree to the{" "}
              <a href="https://google.com">terms and conditions</a>
            </label>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label className="label">
              Do you test your React code?
            </label>
            <label className="radio">
              <input
                type="radio"
                name="test"
                onChange={() => setTest(true)}
                value="Yes"
                checked={test}
              />
              Yes
            </label>
            <label className="radio">
              <input
                type="radio"
                name="test"
                onChange={() => setTest(false)}
                value="No"
                checked={!test}
              />
              No
            </label>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button type="submit" className="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
