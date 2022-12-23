import React from 'react'
import { useState, useRef } from 'react'

export default function FormGet() {
  let [searchResult, setSearchResult] = useState('')
  const form = useRef()

  const onSubmitForm = (event) => {
    event.preventDefault()
    const formData = new FormData(form.current)
    let params = new URLSearchParams(formData)
    let URL = '/api/form-get?' + params

    fetch(URL)
      .then((response) => response.json())
      .then((result) => {
        let r = (
          <>
            search {result.target} matching with {result.kw}
            <br />
            result found: {result.results} results
          </>
        )
        setSearchResult(r)
      })
      .catch((err) => alert(err))
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Form GET</h1>
      <form ref={form} onSubmit={onSubmitForm}>
        <label htmlFor='search'>search</label>&nbsp;
        <select name='target' id='target'>
          <option value='website'>website</option>
          <option value='image'>image</option>
          <option value='video'>video</option>
        </select>
        &nbsp;
        <input type='text' id='kw' name='kw' />
        &nbsp;
        <button>confirm</button>
      </form>
      <br />
      <div>{searchResult}</div>
    </div>
  )
}
