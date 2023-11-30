import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type PokemonItem = {
  name: string;
  url: string;
};

const Pokemon = ({ name, url }: PokemonItem) => {
  const { data, isLoading } = useQuery({
    queryKey: [`pokemon${url}`],
    queryFn: async () => (await axios.get(url)).data,
  });

  if (isLoading) return null;
  return (
    <div className="flex items-center border border-[#E3E1E5] rounded-[12px] p-[15px] bg-[#FDFDFD]">
      <div className="rounded-full bg-gray-200 overflow-hidden max-w-[72px] max-h-[72px]">
        {data.sprites.front_default ? (
          <img src={data.sprites.front_default} className="w-full h-full" />
        ) : (
          <div className="w-[72px] h-[72px] bg-gray-200"></div>
        )}
      </div>
      <div className="ml-[8px] leading-[24px] text-[20px] tracking-[2%] font-medium">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </div>
    </div>
  );
};

export default Pokemon;
