import React from 'react'
import WikipediaLogo from '../assets/images/wikipediaLogo.png'

const WikipediaHeader = props => {
    return (
        <React.Fragment>
            <img src={WikipediaLogo} alt="Wikipedia Logo"></img>
        </React.Fragment>
  )
}

export default WikipediaHeader