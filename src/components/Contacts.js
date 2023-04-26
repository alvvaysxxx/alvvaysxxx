import React from 'react'
import BackButton from './BackButton'
import arrow from '../vectors/arrow.svg'

export default function Contacts() {
  return (
    <div className = 'contactsPage'>
      <BackButton/>
      <h3 className = 'title2'>Контакты.</h3>
      <a href = 'https://instagram.com/urion.dev' target = '__blank'><h2 className = 'title link displayInline'>Instagram</h2><img src = {arrow} className = 'item-arrow'/></a>
      <a href = 'https://t.me/uriondsgn' target = '__blank'><h2 className = 'title link displayInline'>Telegram</h2><img src = {arrow} className = 'item-arrow'/></a>
    </div>
  )
}
