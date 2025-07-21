
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar fixed top-0 z-50 transition-all mx-auto px-5 py-3 flex items-center justify-between">
        <div className="navbar-brand flex-auto">
          <img src="/src/assets/images/logo-Aaradhya_trust.png" className="logo" alt="logo-Aaradhya_trust" />
        </div>
        <ul id="menu" className="nav-links flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-6 justify-center items-center">
          <li><a href="#" className="nav-link flex items-center"><i className="fas fa-home mr-1"></i> Home</a></li>
          <li><a href="#memorial" className="nav-link flex items-center"><i className="fas fa-monument mr-1"></i> SPB Memorial</a></li>
          {/* <li><a href="#" className="nav-link flex items-center"><i className="fas fa-users mr-1"></i> Board Members</a></li> */}
          <li><a href="#gallery" className="nav-link flex items-center"><i className="fas fa-images mr-1"></i> Gallery</a></li>
          <li><a href="#contact" className="nav-link flex items-center"><i className="fas fa-envelope mr-1"></i> Contact Us</a></li>
          <li><a href="#donate" className="nav-link flex items-center"><i className="fas fa-donate mr-1"></i> Donate</a></li>
        </ul>
        <button id="menu-toggle" className="flex-auto lg:hidden">
          <i className="fa-brands fa-pagelines fa-3x"></i>
        </button>
      </nav>

      {/* Home Page Content */}
      <main className="pt-20">
        <section id="hero" className="relative px-4 py-[100px] overflow-hidden bg-white">
          {/* Background Circle Gradient */}
          <div className="absolute -top-20 -left-20 w-80 h-80 md:w-[30rem] md:h-[30rem] rounded-full bg-gradient-to-br from-secondary-clr/30 to-secondary-clr/10 blur-2xl z-0"></div>
          <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
            {/* Image with 3D frame */}
            <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md">
              <div className="absolute -inset-3 rotate-[8deg] rounded-2xl bg-accent-clr shadow-xl z-0"></div>
              <img src="/src/assets/images/SPB-Photos/SPB-Photo-4.jpg" alt="SP Balasubrahmanyam" className="relative z-10 rounded-2xl shadow-lg" />
            </div>
            {/* Text Content */}
            <div className="text-center md:text-left space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-clr">Aaradhya</h1>
              <h2 className="text-lg font-semibold text-secondary-clr">The Vision</h2>
              <p className="text-base md:text-lg leading-relaxed text-primary-clr">
                Aaradhya is a tribute to Shri S.P. Balasubrahmanyam, celebrating his timeless legacy and music.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-primary-clr italic">
                Born from love and remembrance, it unites generations through his soulful voice...
              </p>
              <a href="#vision" className="inline-block px-6 py-3 rounded-full text-white bg-accent-clr hover:bg-secondary-clr transition duration-300 font-medium shadow-md">
                Explore More
              </a>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="w-[calc(100%-88px)] mx-auto rounded-2xl shadow-lg relative px-4 py-10 md:py-16 overflow-hidden">
          <div className="space-y-8 text-white">
            <h2 className="vision-title text-3xl md:text-4xl font-bold">The Vision</h2>
            <p className="vision-paragraph text-base md:text-lg leading-relaxed">
              The word <span className="highlight">Aaradhya <i className="fas fa-heart text-accent-clr"></i></span> means “worshipped”. It is a Sanskrit term inferring the blessing of Lord Ganesh. <span className="highlight">Aaradhya</span> is a foundation started by family members of the late <span className="highlight">Shri S.P. Balasubrahmanyam <i className="fas fa-music text-accent-clr"></i></span> to remember, commemorate and celebrate the legendary singer’s life and legacy. The core of <span className="highlight">Aaradhya</span> dwells upon this foundation.
            </p>
            <p className="vision-paragraph text-base md:text-lg leading-relaxed">
              The vision of <span className="highlight">Aaradhya</span> came into existence during the difficult time of COVID-19 when the legendary singer breathed his last and attained a heavenly abode at the feet of the Almighty.
            </p>
            <p className="vision-paragraph text-base md:text-lg leading-relaxed">
              Though he is no longer with us, his music and songs have deeply impacted every listener’s heart, enabling them to <span className="highlight">cherish</span> each emotion through his soulful voice.
            </p>
            <p className="vision-paragraph text-base md:text-lg leading-relaxed">
              Such a legend must be celebrated for eternity; hence, <span className="highlight">Aaradhya</span> symbolizes his earthly existence through a foundation where people come together to celebrate <span className="highlight">Shri. S.P. Balasubrahmanyam and his music</span> for generations to come...
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section id="memorial-cta" className="relative py-16 px-4 sm:px-8 md:px-16 overflow-hidden">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide">Enter the Memorial</h2>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              Step into a timeless space where melodies linger and memories come alive. <br />
              Celebrate the legacy of Shri. S.P. Balasubrahmanyam — a tribute for every heart he touched.
            </p>
            <a href="#memorial" className="inline-block mt-4 px-8 py-3 text-lg font-semibold rounded-full bg-accent-clr text-primary-clr hover:bg-white hover:text-secondary-clr transition-all duration-300 shadow-lg">
              Enter Now
            </a>
          </div>
          <div className="absolute -top-10 -right-10 opacity-10 text-[10rem] rotate-12">
            <i className="fas fa-music"></i>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 mt-10 px-5 py-3">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col1">
            <h5 className="text-xl font-bold mb-2">Pages</h5>
            <ul>
              <li><a href="#" className="hover:text-gold">Home</a></li>
              <li><a href="#memorial" className="hover:text-gold">SPB Memorial</a></li>
              {/* <li><a href="#" className="hover:text-gold">Board Members</a></li> */}
              <li><a href="#gallery" className="hover:text-gold">Gallery</a></li>
              <li><a href="#donate" className="hover:text-gold">Donate</a></li>
            </ul>
          </div>
          <div className="col2">
            <h5 className="text-xl font-bold mb-2">Legal &amp; Policies</h5>
            <ul>
              <li><a href="#privacy" className="hover:text-gold">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-gold">Terms &amp; Conditions</a></li>
              <li><a href="#cancellation" className="hover:text-gold">Cancellation &amp; Refund Policy</a></li>
              <li><a href="#shipping" className="hover:text-gold">Shipping &amp; Delivery Policy</a></li>
            </ul>
          </div>
          <div className="col4">
            <h5 className="text-xl font-bold mb-2">Contact Us</h5>
            <p className="font-bold">Aaradhya Charitable Trust</p>
            <address className="">Old No. 16, New No. 41,<br />Kamdar Nagar, Nungambakkam,<br />Chennai, Tamll Nadu - 600034</address>
            <p className="">Contact no.: <a href="tel:+9360934646">9360934646</a></p>
            <p className="">Email: <a href="mailto:trustaaradhya@gmail.com">trustaaradhya@gmail.com</a></p>
          </div>
        </div>
        <hr className="border-0 h-0.5 bg-white rounded-full opacity-30 my-5 w-full container mx-auto" />
        <div className="container footer-bottom mx-auto px-4 w-full flex-wrap md:justify-between align-center">
          <p className="mb-0">&copy; 2025 Aaradhya Trust. All rights reserved.</p>
          <p className="mb-0">Sketched with <i className="fa fa-heart"></i> by <a href="https://www.tensketch.com/" className="">TenSketch</a></p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
