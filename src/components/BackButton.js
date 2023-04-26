import React from 'react'
import { Link } from 'react-router-dom'

export default function BackButton() {
  return (
    <div>
            <Link to = '/'><button className = 'return'>На главную</button></Link>
    </div>
  )
}
