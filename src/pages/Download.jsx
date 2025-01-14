import "../assets/images/download.png";

const Download = () => {
  return (
    <>
      <div className="bg-gray-900 h-24"></div>
      <div
        className="bg-center bg-cover bg-no-repeat min-h-screen flex flex-col items-start justify-center pl-10 relative"
        style={{
          backgroundImage: `url('/src/assets/images/download.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60 sm:opacity-0"></div>

        <div className="lg:pl-12 relative z-10">
          <p className="text-white text-5xl font-bold tracking-wide">
            Good to Go? Download the
            <br />
            Gojek app today!
          </p>
          <div className="flex space-x-4 mt-6">
            <a
              href="https://apps.apple.com/app/gojek/id1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium shadow-md hover:bg-gray-100">
                App store
              </button>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.gojek.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium shadow-md hover:bg-gray-100">
                Play store
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
