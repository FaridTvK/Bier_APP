import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { IBeer } from "../interface/Ibeer/IBeer";

interface IBeerDetails extends IBeer {
  rating?: number;
  ingredients?: string[];
}

const Detailpage = () => {
  const { id } = useParams<{ id: string }>();
  const [beer, setBeer] = useState<IBeerDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch beer details");
        }
        const data: IBeerDetails = await response.json();
  
        if (data.rating === undefined) {
          data.rating = Math.round((Math.random() * 4 + 1) * 10) / 10; 
        }
        if (!data.ingredients) {
          data.ingredients = ["Water", "Barley", "Hops", "Yeast"];
        }
        setBeer(data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching beer details. Please try again later.");
        setLoading(false);
      }
    };

    fetchBeer();
  }, [id]);

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
    <div className="flex flex-col items-center py-10 px-4 bg-gradient-to-br from-yellow-50 to-orange-50 min-h-screen">
      <div className="w-full max-w-md mb-4">
        <Link 
          to="/products" 
          className="flex items-center text-secondary-orange hover:text-light-orange transition-colors duration-300 group"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="font-medium">Back to beers</span>
        </Link>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md max-w-md w-full">
        <img
          src={beer.image_url}
          alt={beer.name}
          className="w-full h-auto rounded-lg mb-4"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const target = e.currentTarget;
            target.onerror = null;
            target.src = "/Fallback_Beer.svg";
          }}
        />
        <h2 className="text-2xl font-bold text-dark-text mb-2">{beer.name}</h2>
        <p className="text-xl text-secondary-orange font-bold mb-4">{beer.tagline}</p>
        
        <div className="h-px bg-light-orange my-5 w-full"></div>
        
        <div className="text-left mb-6">
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p className="text-gray-700">{beer.description || "No description available"}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-3 text-gray-800">Rating</h3>
          <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-100 to-yellow-300 p-3 rounded-lg shadow-lg">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${
                  i < Math.round(beer.rating ?? 0) ? "text-yellow-500" : "text-gray-300"
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927a1 1 0 011.902 0l1.286 3.978a1 1 0 00.95.69h4.182c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.978a1 1 0 01-1.54 1.118l-3.39-2.46a1 1 0 00-1.176 0l-3.39 2.46a1 1 0 01-1.54-1.118l1.287-3.978a1 1 0 00-.364-1.118L2.043 9.405c-.784-.57-.38-1.81.588-1.81h4.182a1 1 0 00.95-.69l1.286-3.978z" />
              </svg>
            ))}
            <span className="ml-3 text-lg font-semibold text-yellow-800">
              {beer.rating?.toFixed(1)} / 5
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">Ingredients</h3>
          <ul className="list-disc list-inside bg-white p-4 rounded-lg shadow-lg text-gray-700 space-y-1">
            {beer.ingredients?.map((ingredient, index) => (
              <li key={index} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-green-500 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414L8.414 15 3.293 9.879a1 1 0 011.414-1.414l3.707 3.707 7.586-7.586a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};export default Detailpage;
