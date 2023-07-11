import './globals.css'

export default function Home() {
  return (
    <main>
      <nav className="container mx-auto">
        <a className="fixed left-0 top-0 flex justify-left nav-text">
          eBoost
        </a>
      </nav>
      <section className="cta-landing-page">
        <h1>Maintainence Made Easy</h1>
        <div className='cta-btns'>
          <div className='cta-btn'>Predictions</div>
          <div className='cta-btn'>Logs</div>
        </div>

      </section>
      <footer>
        <a className="fixed center-0 bottom-0 flex nav-text">
          &copy; eBoost - {new Date().getFullYear()}
        </a>
      </footer>
    </main>
  );
}
