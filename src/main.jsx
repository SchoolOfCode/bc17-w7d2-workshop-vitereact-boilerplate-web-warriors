import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <h1 className="heading">🔥 Fireplace Palace</h1>
      </header>

      <main>
        <section className="section hero hero-section">
          <img src="Images/hero-mobile.png" alt=""/>
          <article>
            <h1>Discover the perfect Fireplace..</h1>
            <h2>Book consultation: <span>0121 345 6789</span></h2>
          </article>
        </section>
        <h2 className="how-it-works-header">How it works</h2>
        
        <section className="section how-it-works">
          <div className="card">
            <img src="Images/how-it-works-1.png" alt="" />
            <h3>Give us a call...</h3>
            <p>
              Call us and book a "Design Consultation" on a date and time to
              suit you.
            </p>
          </div>

          <div className="card">
            <img src="Images/how-it-works-2.png" alt="" />
            <h3>We come to you...</h3>
            <p>
              We come to your home to do an assessment of the space and to your
              style preference.
            </p>
          </div>

          <div className="card">
            <img src="Images/how-it-works-3.png" alt="" />
            <h3>We recommend...</h3>
            <p>We send you a bespoke set of fireplace recommendations.</p>
          </div>
        </section>
        </main>
        <footer>
        <div>
          <p>Find us on:</p>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>TikTok</li>
          </ul>
        </div>
        <div>
          <p>©️ Fireplace Palace</p>
          <p>
            <a href="mailto:info@firepalace.co.uk">info@firepalace.co.uk</a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;