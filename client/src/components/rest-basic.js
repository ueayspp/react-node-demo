import React from 'react'
import { useState } from 'react'

export default function RestBasic() {
  let [serverTime, setServerTime] = useState('')
  let [footballResult, setFootballResult] = useState('')

  const onClickShowTime = () => {
    fetch('/api/server-time')
      .then((response) => response.json())
      .then((result) => {
        let r = (
          <>
            {result.hour}:{result.minute}:{result.second}
          </>
        )
        setServerTime(r)
      })
      .catch((err) => alert(err))
  }

  const onClickFootballResult = () => {
    fetch('/api/football-result')
      .then((response) => response.text())
      .then((result) => setFootballResult(result))
      .catch((err) => alert(err))
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>REST Basic</h1>
      <button onClick={onClickShowTime}>Display Server Time</button>
      <div>{serverTime}</div>
      <button onClick={onClickFootballResult}>Display Football Result</button>
      <div dangerouslySetInnerHTML={{ __html: footballResult }}></div>
    </div>
  )
}
