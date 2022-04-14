import React from 'react'
import './about.css'

const About = () => {
  return (
    <>
        <section className="principal">
            <section className="principal_logo">
                <img src={require('../../assets/logo.jpg')} alt="Logo do perfil" />
            </section>
            <section className="principal_text">
                <h3>Sobre</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, voluptatem labore quibusdam distinctio neque sit, reiciendis repellat aliquid aliquam nihil nulla exercitationem atque perferendis rerum molestias qui omnis? Architecto, odio!</p>
            </section>
        </section>
    </>
  )
}

export default About