import React, { useState } from "react";
import "./Donate.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Donate = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowThankYou(true);
  };

  return (
    <div className="donate-page">
      <Navbar />
      <main className="pt-20">
        <section className="py-12 bg-white donate-form-section bg-gradient-to-br">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="text-center">
                <img src="/assets/images/gallery/SPB_Museum-photos-8.jpg" alt="Donate to Support" className="mx-auto max-w-full rounded-md shadow-md" />
              </div>
              <div>
                <div className="bg-white p-6 shadow-xl rounded-lg">
                  <h2 className="text-2xl font-bold text-secondary-clr text-center mb-2">Make a Difference – Donate Now</h2>
                  <p className="text-sm text-gray-600 text-center mb-4">
                    Your details are secure and used only for tax exemptions under our
                    <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>.
                  </p>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                      <input type="text" name="donor_name" required minLength={3} maxLength={50}
                        className="peer w-full px-3 pt-5 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-clr"
                        placeholder=" " />
                      <label className="absolute text-sm text-gray-500 left-3 top-2 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm transition-all">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                    </div>
                    <div className="relative">
                      <input type="tel" name="donor_mobile" required pattern="[6-9]\d{9}" maxLength={10}
                        className="peer w-full px-3 pt-5 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-clr"
                        placeholder=" " />
                      <label className="absolute text-sm text-gray-500 left-3 top-2 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm transition-all">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                    </div>
                    <div className="relative">
                      <input type="email" name="donor_email" required
                        className="peer w-full px-3 pt-5 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-clr"
                        placeholder=" " />
                      <label className="absolute text-sm text-gray-500 left-3 top-2 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm transition-all">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                    </div>
                    <div className="relative">
                      <input type="text" name="donor_aadhar" required pattern="\d{12}" maxLength={12}
                        className="peer w-full px-3 pt-5 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-clr"
                        placeholder=" " />
                      <label className="absolute text-sm text-gray-500 left-3 top-2 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm transition-all">
                        Aadhar Number <span className="text-red-500">*</span>
                      </label>
                      <small className="text-gray-500 text-xs">Required for tax benefits. We keep your Aadhar confidential.</small>
                    </div>
                    <div className="relative">
                      <input type="text" name="donor_pan" required maxLength={10} pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                        className="peer uppercase w-full px-3 pt-5 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-clr"
                        placeholder=" " />
                      <label className="absolute text-sm text-gray-500 left-3 top-2 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm transition-all">
                        PAN Number <span className="text-red-500">*</span>
                      </label>
                      <small className="text-gray-500 text-xs">For issuing 80G certificates.</small>
                    </div>
                    <div className="relative">
                      <input type="number" name="donation_amount" required min={100} max={1000000}
                        className="peer w-full px-3 pt-5 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-clr"
                        placeholder=" " />
                      <label className="absolute text-sm text-gray-500 left-3 top-2 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm transition-all">
                        Donation Amount (INR) <span className="text-red-500">*</span>
                      </label>
                    </div>
                    <div className="relative">
                      <textarea name="donor_message" rows={3}
                        className="peer w-full px-3 pt-5 pb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-clr"
                        placeholder=" "></textarea>
                      <label className="absolute text-sm text-gray-500 left-3 top-2 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm transition-all">
                        Message (Optional)
                      </label>
                    </div>
                    {/* Recaptcha placeholder */}
                    <div></div>
                    <div>
                      <button type="submit"
                        className="w-full bg-secondary text-white py-2 px-4 rounded-md hover:bg-green-800 transition">
                        Proceed to Donate
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Thank You Modal */}
        {showThankYou && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto p-6 text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-secondary-clr mb-4">Thank You for Your Support!</h1>
              <p className="text-gray-700 mb-3">
                Your contribution helps our trust to make a positive impact in the lives of many.
              </p>
              <hr className="border-t border-gray-300 my-4" />
              <p className="text-gray-700">If you have any questions, feel free to contact us:</p>
              <p className="text-sm mt-2">
                📞 <a href="tel:+919360934646" className="text-blue-600 underline block">97910 14236 </a>
                📧 <a href="mailto:trustaaradhya@gmail.com" className="text-blue-600 underline">trustaaradhya@gmail.com</a>
              </p>
              <button onClick={() => setShowThankYou(false)} className="inline-block mt-5 bg-secondary-clr text-white px-6 py-2 rounded-full hover:bg-green-800 transition">
                Go Back to Home
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
