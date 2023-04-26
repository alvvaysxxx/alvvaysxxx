import React from 'react'
import BackButton from './BackButton'
import services from '../services'

export default function Services() {
  return (
    <div className = 'servicesPage'>
      <BackButton />
      <h3 className = 'title2'>Мои услуги.</h3>
      {services.map((service, index) => {
        return (
          <div className = 'card'>
            <h3 className = 'title cardTitle'>{service.title}</h3>
            <p className = 'text'>{service.description}</p>
            <p className = 'cardCenter'>{service.price}</p>
          </div>
        )
      })}
    </div>
  )
}
