import SelectForm from "./SelectForm";
import NagivateButton from "./NagivateButton";
import Pokemon from "./Pokemon";
import usePokemonList from "./hooks/usePokemonList";
import { PokemonItem, PokemonListProps, SortType } from "./types/pokemon";

const PokemonList = ({ data }: PokemonListProps) => {
  const {
    currentPage,
    nPages,
    sortType,
    handleSelectSortType,
    currentItems,
    handlePrevious,
    handleNext,
  } = usePokemonList(data);

  return (
    <div className="bg-[#F6F6F7] p-[48px] h-screen scroll-x-0">
      <div className="flex justify-between items-center pb-[16px]">
        <span className="text-[#363545] text-[32px] leading-[36px] tracking-[0.32px] headline">
          All the Pokemon!
        </span>

        <div className="flex items-center gap-[8px]">
          <SelectForm
            sortType={sortType}
            handleSelectSortType={handleSelectSortType}
            value={SortType.SORT_NAME}
            text="Sort Name"
          />
          <SelectForm
            sortType={sortType}
            handleSelectSortType={handleSelectSortType}
            value={SortType.SORT_ID}
            text="Sort ID"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-[16px]">
        {currentItems.map((pokemon: PokemonItem) => {
          const { name, url } = pokemon;
          return <Pokemon key={name} name={name} url={url} />;
        })}
      </div>

      <div className="fixed w-full bottom-0 left-0 right-0">
        <div className="flex justify-between p-[48px]">
          <NagivateButton
            disabled={currentPage === 1}
            handleClick={handlePrevious}
            text="Previous 12"
          />
          <NagivateButton
            disabled={currentPage >= nPages}
            handleClick={handleNext}
            text="Next 12"
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
