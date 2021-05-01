import {useState , useEffect} from 'react'
import Quote from './components/Quote'
// import Loader from './components/Loader'

function App() {
  // State for Quote
  const [quote, setQuote] = useState({
    quote: '',
    author: '',
  })
  
  // Fetch Quote From API
  const getQuoteFromApi = async () => {
    const apiUrl = `http://quotes.stormconsultancy.co.uk/random.json`

    try {
      const res = await fetch( apiUrl )
      const data = await res.json()
      setQuote({
        quote: data.quote,
        author: data.author
      })
    } catch(err) {
      console.log(err)
    }
  }

  // Run the fetch function on window load
  useEffect(() => {
    getQuoteFromApi()
  }, [])

  // Tweet Quote
  const tweetQuote = () => {
    const theQuote = quote.quote
    const theAuthor = quote.author
    const tweetUrl = `https://twitter.com/intent/tweet?text=${theQuote} - ${theAuthor}`

    window.open(tweetUrl , '_blank')
  }
  // New Quote
  const getNewQuoteFromApi = () => {
    getQuoteFromApi()
  }

  return (
    <>
      <div className="quote-container" id="quote-container">
        <Quote quote={quote.quote} author={quote.author} getNewQuoteFromApi={getNewQuoteFromApi} tweetQuote={tweetQuote}/>
      </div>
      {/* <Loader/> */}
    </>
  );
}

export default App;
