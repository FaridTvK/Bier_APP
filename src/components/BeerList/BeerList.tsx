import { useState, useEffect } from "react";
import { IBeer } from "../../interface/Ibeer/IBeer";
import "./BeerList.css";
import BeerItem from "../BeerItem/BeerItem";

const Beerlist = () => {
  // 1. Fetchen
  const [allBeerData, setAllBeerData] = useState<IBeer[] | null>(null);

  useEffect(() => {
    fetch("https://api.sampleapis.com/beers/ale")
      .then((response) => response.json())
      .then((data) => setAllBeerData(data))
      .catch((error) => console.error("Fetchen klappt nicht!", error));
  }, []); // Abhängigkeitsarray, wenn leer, nur einmal ausgeführt, wenn variable, wird immer ausgeführt, wenn variable sich ändert

  console.log(allBeerData);

  return (
    <section className="list_items">
      {allBeerData?.map((einzelnesObject, index) => (
        // beer: name der Prop (Ettikett oder Schlüssel, der sagt, welche Art von Daten weitergegeben wird)
        // einzelnesObject: Wert der Prop, TATSÄCHLICHE DATEN, die weitergegeben werden
        <div className="single_beers">
          <BeerItem key={index} beer={einzelnesObject} />
          <div className="single_line"></div>
        </div>
      ))}
    </section>
  );
};

export default Beerlist;
