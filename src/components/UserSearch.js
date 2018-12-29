import React from 'react'

const UserSearch = props => {
    return (
        <div className="search_container">
            <input type="text" placeholder="Search for article" className="search_input"/>
            <button className="search_button">Search</button>
        </div>
  )
}

export default UserSearch