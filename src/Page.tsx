import axios from "axios";
import PokemonList from "./PokemonList";
import { useQuery } from "@tanstack/react-query";

const Page = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["pokemonList"],
    queryFn: async () =>
      (await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20000")).data,
  });

  if (isLoading) return null;

  return <PokemonList data={data} />;
};

export default Page;
