import React from 'react'
import { useState, useRef } from 'react'

export default function FormPost() {
  let [postedData, setPostedData] = useState('')
  const form = useRef()

  const onSubmitForm = (event) => {
    event.preventDefault()
    const formData = new FormData(form.current)
    const formEntry = Object.fromEntries(formData.entries())

    fetch('/api/form-post', {
      method: 'POST',
      body: JSON.stringify(formEntry),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.text())
      .then((result) => setPostedData(result))
  }

  const inputStyle = { margin: '5px 0' }

  return (
    <div style={{ margin: '30px' }}>
      <h1>Form POST</h1>
      <form ref={form} onSubmit={onSubmitForm}>
        <div>contact us</div>
        <input type='text' name='name' size={43} placeholder='name' style={inputStyle} />
        <br />
        <input type='text' name='email' size={43} placeholder='email' style={inputStyle} />
        <br />
        <textarea
          type='text'
          name='message'
          cols={40}
          rows='4'
          placeholder='message'
          style={inputStyle}
        />
        <br />
        <button>submit</button>
      </form>
      <br />
      <div dangerouslySetInnerHTML={{ __html: postedData }}></div>
    </div>
  )
}
