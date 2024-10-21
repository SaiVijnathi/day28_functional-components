import React from 'react'

function Song(props) {
  return (
    <div className='songsdiv'>
    <audio src={props.song} controls></audio>
    </div>
  )
}

export default Song;