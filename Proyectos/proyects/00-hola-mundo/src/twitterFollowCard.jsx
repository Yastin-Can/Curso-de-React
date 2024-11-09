import { useState } from 'react'
import './app.css'

export function TwitterFollowCard ({children, userName}) {
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo': 'seguir'
    const buttonClassName = isFollowing 
    ? 'md-followCard-button is-following' 
    : 'md-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='md-followCard'>
            <header className='md-followCard-header'>
                <img 
                className='md-followCard-avatar'
                src={`https://unavatar.io/${userName}`} 
                alt="El avatar de mindudev" />
                <div>
                    <strong>{userName}</strong>
                    <span>@{children}</span>
                </div>
            </header>
            
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}