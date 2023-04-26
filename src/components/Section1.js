import React from 'react'
import gif from '../images/gif.gif'
import down from '../vectors/down.svg'

export default function Section1() {
  return (
    <div className = 'sect1'>
      <p className = 'fig'><h1 className = 'urion layers glitch'>Urion</h1><img className = 'gif' src = {gif}/></p>
      <p className = 'scroll'>scroll down or die</p>
      <p className = 'fig'><img src = {down} className = 'down'/></p>
    </div>
  )
}
