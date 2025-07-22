import React, { useState, useRef } from "react";
import "./Donate.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Donate = () => {
  // PAN input component for auto keyboard toggle
  const panAlphaRef = useRef(null);
  const panNumRef = useRef(null);
  const panLastRef = useRef(null);
  const [panAlpha, setPanAlpha] = useState("");
  const [panNum, setPanNum] = useState("");
  const [panLast, setPanLast] = useState("");

  const handleAlphaChange = (e) => {
    const val = e.target.value.toUpperCase().replace(/[^A-Z]/g, "");
    setPanAlpha(val);
    if (val.length === 5) {
      panNumRef.current.focus();
    }
  };
  const handleNumChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    setPanNum(val);
    if (val.length === 4) {
      panLastRef.current.focus();
    }
  };
  const handleLastChange = (e) => {
    const val = e.target.value.toUpperCase().replace(/[^A-Z]/g, "");
    setPanLast(val);
  };
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
                <form onSubmit={handleSubmit} className="space-y-6">
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
                    <label className="block mb-1 text-sm text-gray-500">PAN Number <span className="text-red-500">*</span></label>
                    <div className="flex gap-2 items-center">
                      <input
                        type="text"
                        inputMode="text"
                        pattern="[A-Z]{5}"
                        maxLength={5}
                        ref={panAlphaRef}
                        value={panAlpha}
                        onChange={handleAlphaChange}
                        className="w-16 text-center uppercase border rounded"
                        placeholder="ABCDE"
                        required
                        name="panAlpha"
                      />
                      <input
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]{4}"
                        maxLength={4}
                        ref={panNumRef}
                        value={panNum}
                        onChange={handleNumChange}
                        className="w-12 text-center border rounded"
                        placeholder="1234"
                        required
                        name="panNum"
                      />
                      <input
                        type="text"
                        inputMode="text"
                        pattern="[A-Z]{1}"
                        maxLength={1}
                        ref={panLastRef}
                        value={panLast}
                        onChange={handleLastChange}
                        className="w-8 text-center uppercase border rounded"
                        placeholder="F"
                        required
                        name="panLast"
                      />
                    </div>
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
