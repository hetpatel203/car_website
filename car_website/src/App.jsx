import React , {useState}from 'react'
import Background from './components/background/Background'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
const App = () => {

  const heroData = [
    {text1: 'Dive into', text2: 'What you love'},
    {text1: 'Indulge', text2: 'your passions'},
    {text1: 'Give in to', text2: 'your passions'},
  ]

  const [heroCount, setHeroCount] = useState(0);
  const[play, setPlay] = useState(false);

  return (
    <>
    <div>
      <Background play={play} heroCount={heroCount} />
      <Navbar />
      <Hero 
      setPlay={setPlay}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      play={play}
      />
    </div>
    </>
  )
}

export default App
