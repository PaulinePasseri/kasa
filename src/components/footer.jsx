import FooterLogo from '../assets/footer-logo.png'

export default function Footer() {
  return (
    <div className="footer__container">
      <img
        src={FooterLogo}
        alt="Logo Kasa"
        className="footer__container--img"
      />
      <div className="footer__container--txt">
        <p><i className="fa-regular fa-copyright"></i> 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  )
}
