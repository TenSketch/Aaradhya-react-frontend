import React from 'react';
import './Footer.css';

const Footer = () => (
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
);

export default Footer;
