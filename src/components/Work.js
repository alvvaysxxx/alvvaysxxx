import React from 'react'
import worksList from '../worksList'
import { useParams } from 'react-router-dom'
import arrow from '../vectors/arrow.svg'
import { Link } from 'react-router-dom'
import BackButton from './BackButton'

export default function Work() {
  const id = useParams()
  console.log(id)
  const found = worksList.find(element => element.id == id.slug)
  console.log(found, id.slug)
  return (
    <div className = 'workPage'>
      <BackButton/>
      <h2 className = 'title center'>{found.title}</h2>
      <h3 className = 'title2 '>Цель:</h3>
      <p className = 'p-right'>{found.problem}</p>
      <h2 className = 'title'>Итог</h2>
      <p className = 'text'>{found.detailedDesc}</p>
      <a href = {found.link} target = '__blank'><h2 className = 'title link displayInline'>Результат</h2><img src = {arrow} className = 'item-arrow'/></a>
    </div>
  )
}
