import React from 'react'

const RandomArticle = () => {
    return (
        <button
            type="button"
            className="random_button"
            onClick={() => window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank")}
            >
            Click here for a random article
        </button>
    )
}

export default RandomArticle