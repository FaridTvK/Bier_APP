import { useState, useEffect } from "react";
import BeerItem from "../components/BeerItem/BeerItem";
import { IBeer } from "../interface/Ibeer/IBeer";

const Products = () => {
  const [beers, setBeers] = useState<IBeer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await fetch("https://ih-beers-api2.herokuapp.com/beers");
        if (!response.ok) {
          throw new Error("Failed to fetch beers");
        }
        const data = await response.json();
        setBeers(data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching beers. Please try again later.");
        setLoading(false);
      }
    };

    fetchBeers();
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

  return (
    <div className="flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Our Beer Selection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {beers.map((beer) => (
          <BeerItem key={beer._id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default Products;
