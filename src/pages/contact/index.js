import { omit, isUndefined } from 'lodash'
import React, { useState } from 'react'
import { navigate } from 'gatsby-link'

import Layout from '../../components/Layout'

const encode = (data) => new URLSearchParams(data).toString()

export default function Index () {
  const [botField, setBotField] = useState()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.target
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...omit({ 'bot-field': botField, name, email, message }, isUndefined)
        })
      })
      navigate(form.getAttribute('action'))
    } catch (error) {
      alert(error)
    }
  }

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Contact</h1>
            <form
              name="contact"
              method="post"
              action="/contact/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out:{' '}
                  <input name="bot-field" onChange={(e) => setBotField(e.target.value)} />
                </label>
              </div>
              <div className="field">
                <label className="label" htmlFor='name'>
                  Your name
                </label>
                <div className="control">
                  <input
                    className="input"
                    type='text'
                    name='name'
                    onChange={(e) => setName(e.target.value)}
                    id='name'
                    required={true}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor={'email'}>
                  Email
                </label>
                <div className="control">
                  <input
                    className="input"
                    type='email'
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                    id='email'
                    required={true}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor={'message'}>
                  Message
                </label>
                <div className="control">
                  <textarea
                    className="textarea"
                    name='message'
                    onChange={(e) => setMessage(e.target.value)}
                    id='message'
                    required={true}
                  />
                </div>
              </div>
              <div className="field">
                <button className="button is-link" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}
