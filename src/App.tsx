import { useState, useRef } from 'react'
import './App.css'
import heroImage from './F65BF2A6-47F8-4425-80D3-905D897C4EA6.png'
import backgroundMusic from './mao-zedong-propaganda-music-red-sun-in-the-sky.mp3'
import { Lanterns } from './components/Lanterns'
import { PlumBlossoms } from './components/PlumBlossoms'
import { GoldParticles } from './components/GoldParticles'
import { FirecrackerSparks } from './components/FirecrackerSparks'
import { DecorativePattern } from './components/DecorativePattern'
import { SymbolicElements } from './components/SymbolicElements'

function App() {
  const [hasEntered, setHasEntered] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const handleEnter = () => {
    const audio = audioRef.current
    if (audio) {
      audio.loop = true
      audio.play()
    }
    setHasEntered(true)
  }

  const handleStopMusic = (e: React.MouseEvent) => {
    e.preventDefault()
    const audio = audioRef.current
    if (audio) {
      audio.pause()
      audio.currentTime = 0
    }
  }

  const CONTRACT_ADDRESS = '3NJKi1ucWWSCQQL89G5KU17M7PhGBq6qbSMNwMDXpump'

  const handleCopyCA = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS)
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = CONTRACT_ADDRESS
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
    }
  }

  return (
    <>
      <audio ref={audioRef} src={backgroundMusic} />
      {!hasEntered ? (
        <div className="app entry-page">
        <DecorativePattern />
        <GoldParticles />
        <div className="entry-content">
          <h1 className="entry-title">$CHNEWY</h1>
          <img src={heroImage} alt="Year of the Horse" className="entry-image" />
          <button className="entry-button" onClick={handleEnter}>
            ENTER
          </button>
        </div>
      </div>
      ) : (
        <div className="app">
      <DecorativePattern />
      <GoldParticles />
      <FirecrackerSparks />
      <Lanterns />
      <PlumBlossoms />

      <header className="header">
        <h1 className="header-title">$CHNEWY</h1>
        <div className="header-buttons">
          <button type="button" className="header-btn" onClick={handleStopMusic}>Stop Music</button>
          <button type="button" className="header-btn" onClick={handleCopyCA}>COPY CA</button>
          <a href="https://x.com/chineseN_dev" target="_blank" rel="noopener noreferrer" className="header-btn">X</a>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero-symbols hero-left">
            <SymbolicElements side="left" />
          </div>

          <div className="hero-center">
            <img src={heroImage} alt="Year of the Horse" className="hero-image" />
            <h1 className="hero-headline">
              <span className="headline-main">2026</span>
              <span className="headline-divider">—</span>
              <span className="headline-main">Year of the Horse</span>
            </h1>
            <h2 className="hero-subheadline">$CHNEWY</h2>
            <p className="hero-tagline">
              Prosperity · Renewal · Speed · Strength · Good Fortune
            </p>
          </div>

          <div className="hero-symbols hero-right">
            <SymbolicElements side="right" />
          </div>
        </section>

        <section className="blessings">
          <div className="blessing-grid">
            <div className="blessing-item">
              <span className="blessing-icon">🧧</span>
              <span>Prosperity</span>
            </div>
            <div className="blessing-item">
              <span className="blessing-icon">🌸</span>
              <span>Renewal</span>
            </div>
            <div className="blessing-item">
              <span className="blessing-icon">⚡</span>
              <span>Speed</span>
            </div>
            <div className="blessing-item">
              <span className="blessing-icon">💪</span>
              <span>Strength</span>
            </div>
            <div className="blessing-item">
              <span className="blessing-icon">✨</span>
              <span>Good Fortune</span>
            </div>
          </div>
        </section>

        <section className="facts">
          <h2 className="facts-title">FACTS</h2>
          <p className="facts-text">
            Chinese New Year 2026 marks the Year of the Horse, beginning on February 17, 2026. The Horse symbolizes energy, strength, freedom, and forward movement. It's a time for fresh starts, ambition, and bold progress.
          </p>
          <p className="facts-text">
            Celebrations include family reunions, red decorations for good luck, festive meals, lanterns, firecrackers, and the giving of red envelopes for prosperity. The Year of the Horse encourages confidence, determination, and chasing new opportunities with passion and speed. 🧧🐎✨
          </p>
        </section>

        <section className="countries">
          <h2 className="countries-title">COUNTRIES THAT CELEBRATE</h2>
          <div className="countries-grid">
            <div className="country-card">
              <span className="country-flag">🇨🇳</span>
              <h3 className="country-name">China</h3>
              <p className="country-desc">The largest celebration takes place in China, where it's the most important traditional holiday.</p>
            </div>
            <div className="country-card">
              <span className="country-flag">🇹🇼</span>
              <h3 className="country-name">Taiwan</h3>
              <p className="country-desc">Celebrated with family reunions, temple visits, and fireworks.</p>
            </div>
            <div className="country-card">
              <span className="country-flag">🇭🇰</span>
              <h3 className="country-name">Hong Kong</h3>
              <p className="country-desc">Known for large parades, fireworks, and festive markets.</p>
            </div>
            <div className="country-card">
              <span className="country-flag">🇸🇬</span>
              <h3 className="country-name">Singapore</h3>
              <p className="country-desc">Public holiday with colorful street celebrations and lion dances.</p>
            </div>
            <div className="country-card">
              <span className="country-flag">🇲🇾</span>
              <h3 className="country-name">Malaysia</h3>
              <p className="country-desc">Widely celebrated by the Chinese community with open houses and lantern festivals.</p>
            </div>
            <div className="country-card">
              <span className="country-flag">🇻🇳</span>
              <h3 className="country-name">Vietnam</h3>
              <p className="country-desc">Called Tết, with similar traditions but unique cultural customs.</p>
            </div>
            <div className="country-card">
              <span className="country-flag">🇰🇷</span>
              <h3 className="country-name">South Korea</h3>
              <p className="country-desc">Called Seollal, focused on honoring ancestors and family gatherings.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-text">新年快乐 · 马到成功</p>
        <p className="footer-sub">Happy New Year · Success at the First Try</p>
      </footer>
    </div>
      )}
    </>
  )
}

export default App
