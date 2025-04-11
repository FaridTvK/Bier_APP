import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-br from-yellow-100 to-orange-100 min-h-screen">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4 drop-shadow-lg">
        Beer Explorer
      </h1>
      <p className="text-xl text-gray-700 mb-12">
        Discover amazing beers from around the world
      </p>
      <div className="flex flex-wrap gap-6 justify-center mb-12">
        <Link to="/products">
          <button className="flex items-center gap-2 bg-primary-yellow text-dark-text font-bold py-4 px-8 rounded-full shadow-lg hover:bg-secondary-orange hover:text-white transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 2a1 1 0 00-1 1v1H3.5A1.5 1.5 0 002 5.5v9A1.5 1.5 0 003.5 16h13A1.5 1.5 0 0018 14.5v-9A1.5 1.5 0 0016.5 4H15V3a1 1 0 10-2 0v1H8V3a1 1 0 00-1-1zM3.5 5h13a.5.5 0 01.5.5V7H3V5.5a.5.5 0 01.5-.5zm0 4h13v5.5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5V9z" />
            </svg>
            Browse All Beers
          </button>
        </Link>
        <Link to="/random">
          <button className="flex items-center gap-2 bg-primary-yellow text-dark-text font-bold py-4 px-8 rounded-full shadow-lg hover:bg-secondary-orange hover:text-white transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 3a1 1 0 112 0 1 1 0 01-2 0zm5 0a1 1 0 112 0 1 1 0 01-2 0zm-5 5a1 1 0 112 0 1 1 0 01-2 0zm5 0a1 1 0 112 0 1 1 0 01-2 0z" />
            </svg>
            Random Beer
          </button>
        </Link>
      </div>
      <img
        src="/beer-illustration.svg"
        alt="Beer illustration"
        className="max-w-xs md:max-w-sm lg:max-w-md mx-auto shadow-2xl rounded-full animate-bounce"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "/Fallback_Beer.svg";
        }}
      />
    </div>
  );
};

export default Home;
