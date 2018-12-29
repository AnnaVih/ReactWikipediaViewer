import React from 'react'

const WikipediaFooter = () => {
    return (
        <div className="wikipedia_footer">
            <button 
                onClick={() => window.open("https://github.com/AnnaVih/ReactWikipediaViewer", '_blank')}
                className="footer_button"
            >Check source code on GitHub</button>
            <p>Developed in React by Anna Vihrogonova. It is a result of hard work, passion and learning from failure.</p>
        </div>
    )
}

export default WikipediaFooter