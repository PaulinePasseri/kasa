import FooterLogo from '../assets/footer-logo.png'

export default function Footer() {
  return (
    <div>
      <img src={FooterLogo} alt="Logo Kasa" />
      <div>
        <i className="fa-regular fa-copyright"></i>
        <p>2020 Kasa. All rights reserved</p>
      </div>
    </div>
  )
}
