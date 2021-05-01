import React from 'react'

const Quote = ({quote , author, getNewQuoteFromApi, tweetQuote}) => {
    return(
        <>
            {/* Quote */}
            <div className={ quote.length >=120 ? 'long-quote' : 'quote-text'}>
                <i className="fas fa-quote-left"></i>
                <span id="quote">{quote}</span>
            </div>
            {/* Quote Author */}
            <div className="quote-author">
                <span id="author">{author = '' ? 'Unknown' : author}</span>
            </div>
            {/* Buttons */}
            <div className="button-container">
                <button className="twitter-button" id="twitter" title="Tweet This!" onClick={() => tweetQuote()}>
                    <i className="fab fa-twitter"></i>
                </button>
                <button id="new-quote" onClick={() => getNewQuoteFromApi()}>New Quote</button>
            </div>
        </>
    )
}

export default Quote