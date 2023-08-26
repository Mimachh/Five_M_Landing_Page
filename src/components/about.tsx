import React from 'react'

const About = () => {
  return (
    <section id='about' className=''>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div>
          Photo
        </div>
        <div className='md:col-span-2'>
          Text
          Nom du serveur
          Contexte
          phrase cta
          bouton
        </div>
      </div>
    </section>
  )
}

export default About