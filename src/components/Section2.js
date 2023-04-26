import React from 'react'
import logo from '../vectors/Vector.svg'

export default function Section2() {
  return (
    <div>
      <marquee  direction = 'left' scrollamount="15"><h2 className = 'title'>UX/UI, HTML/CSS, JavaScript, Python, React, Django, Bootstrap, Figma, Blender, Cinema4D</h2></marquee>
      <img src = {logo} className = 'logo'/>
      <h2 className = 'title'>ЗДЕСЬ ИДЕЯ <br/> ДРУЖИТ <br/> С ТЕХНОЛОГИЕЙ.</h2>
      <p className = 'text'>Я создаю цифровые продукты, уделяя внимание любым аспектам.</p>
      <h2 className = 'title2'>ВЗГЛЯНИТЕ <br/>НА МОИ <br/>ПОСЛЕДНИЕ РАБОТЫ.</h2>
    </div>
  )
}
