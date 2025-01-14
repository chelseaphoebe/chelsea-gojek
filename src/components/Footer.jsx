const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-8 sm:px-16 lg:px-32 pb-24">
      <img
        id="logo"
        src="/src/assets/images/logo.png"
        alt="Gojek Logo"
        className="w-36 h-36 object-contain mx-auto sm:mx-0"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#products" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Join with us</h4>
          <ul className="space-y-2">
            <li>
              <a href="#drivers" className="hover:underline">
                Driver Partners
              </a>
            </li>
            <li>
              <a href="#merchants" className="hover:underline">
                Merchant Partners
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Careers</h4>
          <ul className="space-y-2">
            <li>
              <a href="#students" className="hover:underline">
                Student
              </a>
            </li>
            <li>
              <a href="#professionals" className="hover:underline">
                Professional
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Get in touch</h4>
          <ul className="space-y-2">
            <li>
              <a href="#help" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#location" className="hover:underline">
                Our Location
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-6">Connect with Us</h4>
          <div className="flex space-x-4">
            <a href="#facebook">
              <img
                src="/src/assets/images/facebook.png"
                alt="Facebook"
                className="w-12 h-12"
              />
            </a>
            <a href="#twitter">
              <img
                src="/src/assets/images/twitter.png"
                alt="Twitter"
                className="w-12 h-12"
              />
            </a>
            <a href="#instagram">
              <img
                src="/src/assets/images/ig.png"
                alt="Instagram"
                className="w-12 h-12"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/chelseaarantza/"
              target="_blank"
            >
              <img
                src="/src/assets/images/linkedin.png"
                alt="LinkedIn"
                className="w-12 h-12"
              />
            </a>
          </div>

          <div className="pt-6">
            <h4 className="font-semibold mt-6 mb-12">Download the app</h4>
            <div className="flex space-x-4">
              <a href="#playstore">
                <img
                  src="/src/assets/images/playstore.png"
                  alt="Google Play Store"
                  className="w-12 h-12"
                />
              </a>
              <a href="#appstore">
                <img
                  src="/src/assets/images/appstore.png"
                  alt="Apple App Store"
                  className="w-12 h-12"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 border-t bg-gray-900 border-gray-700 pt-6">
        <ul className="flex flex-col sm:flex-row gap-4 mb-4 justify-center sm:justify-start">
          <li>
            <a href="#privacy" className="underline">
              Privacy Notice
            </a>
          </li>
          <li>
            <a href="#terms" className="underline">
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="#cookies" className="underline">
              Cookie Settings
            </a>
          </li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-2 justify-center sm:justify-start">
          <p className="text-sm">© 2025 Gojek | Made with 💚 by</p>
          <a
            className="text-sm hover:underline"
            href="https://www.linkedin.com/in/chelseaarantza/"
            target="_blank"
          >
            Chelsea Arantza
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
