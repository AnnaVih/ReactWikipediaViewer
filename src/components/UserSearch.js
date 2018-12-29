import React, { useState } from 'react'
import ArticleList from './ArticleList'

const UserSearch = props => {
    const [ userQuery, setUserQuery ] = useState('')

    const inputChangeHandler = event => {
        setUserQuery(event.target.value)
    }

    const renderArticles = () => {
        if(userQuery){
            return <ArticleList query={userQuery}/>
        }
    }

    return (
        <React.Fragment>
            <div className="search_container">
                <input 
                    type="text"
                    placeholder="Search for article"
                    className="search_input"
                    value={userQuery}
                    onChange={inputChangeHandler}
                    />
            </div>
            {renderArticles()}
        </React.Fragment>
  )
}

export default UserSearch