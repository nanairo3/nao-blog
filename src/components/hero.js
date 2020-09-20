import React from "react"
import "../styles/hero.css"

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero_text">
        Welcome to my blog!
        <br />
        Enjoy lots of posts.
        <br />
      </h1>
      <div className="hero_author">
        <img
          src="https://api.adorable.io/avatars/30/image.png"
          className="hero_author_image"
          alt="avator"
        />
        <p className="hero_author_text">
          Writtten by 2020.
          <br />
          @naoyasu watanabe
        </p>
      </div>
    </div>
  )
}

export default Hero
