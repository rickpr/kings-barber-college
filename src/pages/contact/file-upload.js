import { omit, isUndefined } from 'lodash'
import React, { useState } from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode (data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export default function Contact () {
  const [botField, setBotField] = useState()
  const [name, setName] = useState()
  const [attachment, setAttachment] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.target
    try {
      await fetch('/', {
        method: 'POST',
        body: encode({
          'form-name': form.getAttribute('name'),
          ...omit({ 'bot-field': botField, name, attachment }, isUndefined)
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
            <h1>File Upload</h1>
            <form
              name="file-upload"
              method="post"
              action="/contact/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="file-upload" />
              <div hidden>
                <label>
                  Don’t fill this out:{' '}
                  <input name="bot-field" onChange={(e) => setBotField(e.target.value)} />
                </label>
              </div>
              <div className="field">
                <label className="label" htmlFor="name">
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
                <div className="file">
                  <label className="file-label" htmlFor="attachment">
                    <input
                      className="file-input"
                      type="file"
                      name="attachment"
                      onChange={(e) => setAttachment(e.target.value)}
                    />
                    <span>Choose a file…</span>
                  </label>
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
