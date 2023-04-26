import React from 'react'
import worksList from '../worksList'
import arrow from '../vectors/arrow.svg'
import { Link } from 'react-router-dom';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Section3() {
  return (
    <div className = 'sect3'>
      <div className = 'container-grid' >
        {worksList.map((item, index, id) => {
          return (
            <div className = 'item' key = {item.id}>
              <Link to = {`/work/${item.id} `} key = {`${item.id}link`}><h2 className = 'item-title' key = {`${item.id}h1`}>{item.title}</h2><img className = 'item-arrow' src = {arrow} key = {`${item.id}arrow`}/></Link>
              <p className = 'item-desc'  key = {`${item.id}desc`}>{item.desc}</p>
              <img className = 'item-img' src = {item.img} key = {`${item.id}img`}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}
