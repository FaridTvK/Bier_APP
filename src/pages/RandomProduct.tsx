import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IBeer } from "../interface/Ibeer/IBeer";

const RandomProduct = () => {
  const [beer, setBeer] = useState<IBeer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRandomBeer = async () => {
      try {
        const response = await fetch("https://ih-beers-api2.herokuapp.com/beers/random");
        if (!response.ok) {
          throw new Error("Failed to fetch random beer.");
        }
        const data = await response.json();
        setBeer(data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching random beer. Please try again later.");
        setLoading(false);
      }
    };

    fetchRandomBeer();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center p-10">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-orange"></div>
      </div>
    );

  if (error)
    return (
      <div className="bg-white m-5 p-6 rounded-lg shadow-md border-l-4 border-red-500 text-red-700">
        {error}
      </div>
    );

  if (!beer)
    return (
      <div className="bg-white m-5 p-6 rounded-lg shadow-md text-center">
        Beer not found
      </div>
    );

  return (
    <div className="flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Your Random Beer</h1>
      <div className="bg-white rounded-xl p-6 shadow-md max-w-md w-full">
        <img
          src={beer.image_url}
          alt={beer.name}
          className="w-full h-auto rounded-lg mb-4"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/Fallback_Beer.svg";
          }}
        />
        <h2 className="text-2xl font-bold text-dark-text mb-2">{beer.name}</h2>
        <p className="text-xl text-secondary-orange font-bold mb-4">{beer.tagline}</p>
        <Link to={`/products/${beer._id}`} className="block w-full">
          <button className="bg-primary-yellow text-dark-text font-bold py-2 px-6 rounded-full hover:bg-secondary-orange hover:text-white transition-colors duration-300 w-full">
            See Details
          </button>
        </Link>
      </div>
      <button
        className="bg-primary-yellow text-dark-text font-bold py-2 px-6 rounded-full hover:bg-secondary-orange hover:text-white transition-colors duration-300 mt-6"
        onClick={() => window.location.reload()}
      >
        Get Another Random Beer
      </button>
    </div>
  );
};

export default RandomProduct;
