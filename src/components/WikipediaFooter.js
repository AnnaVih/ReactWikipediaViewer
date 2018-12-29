import React from 'react'

const WikipediaFooter = () => {
    
    const buttonClickHandler = url => {
        window.open(url, '_blank')
    }

    return (
        <div className="wikipedia_footer">
            <button 
                onClick={() => buttonClickHandler("https://github.com/AnnaVih/ReactWikipediaViewer")}
                className="footer_button"
            >Check source code on GitHub</button>
            <p>Developed in React by Anna Vihrogonova. It is a result of hard work, passion and learning from failure.</p>
        </div>
    )
}

export default WikipediaFooter