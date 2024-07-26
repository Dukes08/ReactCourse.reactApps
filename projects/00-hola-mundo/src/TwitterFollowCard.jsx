import './App.css'
import { useState } from 'react'
export function TwitterFollowCard({userName, name}) {
  const [isFollowing, setIsFollowing] = useState(false)
  const text = isFollowing? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing? 'tw-followCard-button is-following': 'tw-followCard-button'
  // using thw hook useState to change the state of the button
  // function that allows to change the state of the button
  const handleClick = () => {setIsFollowing(!isFollowing)}
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='El avatar de midudev'
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
