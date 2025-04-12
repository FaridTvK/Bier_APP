import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-primary-yellow shadow-md py-4">
      <ul className="flex justify-center space-x-6">
        <li>
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => 
              isActive 
                ? "bg-secondary-orange text-white font-bold px-4 py-2 rounded-full" 
                : "text-dark-text font-bold px-4 py-2 rounded-full hover:bg-secondary-orange hover:text-white transition-colors duration-300"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/products"
            className={({ isActive }) => 
              isActive 
                ? "bg-secondary-orange text-white font-bold px-4 py-2 rounded-full" 
                : "text-dark-text font-bold px-4 py-2 rounded-full hover:bg-secondary-orange hover:text-white transition-colors duration-300"
            }
          >
            Beer
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/random"
            className={({ isActive }) => 
              isActive 
                ? "bg-secondary-orange text-white font-bold px-4 py-2 rounded-full" 
                : "text-dark-text font-bold px-4 py-2 rounded-full hover:bg-secondary-orange hover:text-white transition-colors duration-300"
            }
          >
            Random Beer
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
