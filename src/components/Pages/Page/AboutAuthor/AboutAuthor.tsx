import React from "react";
import sochi from "../../../../image/Sochi.jpeg";
import styles from "../../Pages.module.css";

const {background, image, profile, avatar, name, description} = styles;

const AboutAuthor = () => {
  return (
    <div>
      {/* фон первого блока */}
      <div className={background}>
        <img className={image}
             src={sochi}
             alt="Сочи"/>
      </div>

      {/* профиль пользователя */}
      <div className={profile}>
        <img className={avatar}
             src="https://s.starladder.com/uploads/user_logo/5/c/9/d/meta_tag_1039d807e6e9d7e403ecd6510eb61d83.jpg"
             alt=""/>
        <div>
          <h2 className={name}>Станислав Василевич</h2>
          <div className={description}>Я действующий frontend-разработчик веб-приложений на CSS, HTML, JavaScript и React</div>
        </div>
      </div>
    </div>
  )
}

export default AboutAuthor;