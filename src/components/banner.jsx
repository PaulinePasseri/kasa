import HomeBanner from '../assets/home-banner.png'
import AboutBanner from '../assets/about-banner.png'
import { useLocation } from 'react-router-dom'

export default function Banner() {
  const location = useLocation()
  if (location.pathname === '/about') {
    return (
      <div>
        <img src={AboutBanner} alt="bannière avec paysage" />
      </div>
    )
  } else {
    return (
      <div>
        <img src={HomeBanner} alt="bannière avec paysage" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    )
  }
}
