import mail from '../assets/icons8-email-96.png'
import phone from '../assets/icons8-phone-96.png'

const Footer = () => {
  return (
    <footer className="bg-[#1b1b1b] text-gray-300 ">
      
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-8">
        
        {/* Contact Section */}
        <div>
          <h2 className="text-orange-400 text-lg font-semibold mb-4">
            Contact
          </h2>

          <div className="flex items-center gap-3 mb-3">
            <img src={mail} alt="email" className="w-5" />
            <a
              href="mailto:kameshwart736@gmail.com"
              className="hover:text-white transition"
            >
              kameshwart736@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <img src={phone} alt="phone" className="w-5" />
            <a
              href="tel:+918807469642"
              className="hover:text-white transition"
            >
              +91 8807469642
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-orange-400 text-lg font-semibold mb-4">
            Links
          </h2>

          <div className="flex items-center gap-3 mb-3">
            
            <a
              href='https://www.linkedin.com/in/kameshwar-t-147aab377/' target='_blank'
              className="hover:text-white transition"
            >
             Linked In
            </a>
          </div>

          <div className="flex items-center gap-3">
            
            <a
              href="https://github.com/kameshwar7362" target='_blank'
              className="hover:text-white transition"
            >
              Git Hub
            </a>
          </div>
        </div>



        {/* Branding Section */}
        <div className="md:border-l border-gray-600 md:pl-8">
          <h1 className="text-xl font-semibold text-white">Kameshwar T</h1>
          <p className="text-orange-400 text-2xl font-bold">
            Full Stack Developer
          </p>
          <p className="text-sm text-gray-400 mt-2 max-w-xs">
            Building modern, responsive, and user-friendly web applications
            using React and modern technologies.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Kameshwar T. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer