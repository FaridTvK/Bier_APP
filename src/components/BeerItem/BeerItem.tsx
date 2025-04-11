import { Link } from "react-router-dom";
import { IBeer } from "../../interface/Ibeer/IBeer";

interface IBeerItemProps {
  beer: IBeer;
}

const BeerItem: React.FC<IBeerItemProps> = ({ beer }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-xl p-5 m-4 shadow-md transition-transform duration-300 hover:transform hover:-translate-y-2">
      <Link to={`/products/${beer._id}`} className="w-full">
        <img
          src={beer.image_url}
          alt={beer.name}
          className="w-full rounded-lg mb-4 object-contain h-48"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const target = e.currentTarget;
            target.onerror = null;
            target.src = "/Fallback_Beer.svg";
          }}
        />
      </Link>
      <h3 className="text-dark-text text-lg font-semibold mt-2 mb-1">{beer.name}</h3>
      <p className="text-secondary-orange font-bold my-1">{beer.tagline}</p>
      <Link to={`/products/${beer._id}`} className="w-full mt-3">
        <button className="bg-primary-yellow text-dark-text font-bold py-2 px-6 rounded-full hover:bg-secondary-orange hover:text-white transition-colors duration-300 w-full">
          Details
        </button>
      </Link>
    </div>
  );
};
export default BeerItem;
