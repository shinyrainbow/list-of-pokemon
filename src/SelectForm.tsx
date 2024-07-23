import { ChangeEvent } from "react"
import { SortType } from "./types/pokemon";

type SelectFormProps = {
  sortType: SortType;
  handleSelectSortType: (e: ChangeEvent<HTMLInputElement>) => void;
  value: SortType;
  text: string;
};

const SelectForm = ({
  sortType,
  handleSelectSortType,
  value,
  text,
}: SelectFormProps) => {
  return (
    <div className="flex items-center p-[8px] gap-[8px]">
      <div className="relative flex items-center rounded-full cursor-pointer p-[8px]">
        <input
          checked={sortType === value}
          type="radio"
          id={value}
          value={value}
          name="filter"
          onChange={handleSelectSortType}
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-black text-[#024E74] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-black before:opacity-0 before:transition-opacity checked:border-[#024E74] checked:before:bg-[#024E74]"
        />
        <span className="absolute text-[#024E74] transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
          </svg>
        </span>
      </div>
      <div className="leading-[32px] text-[20px] py-[10px] font-light">
        <label htmlFor={value} className="cursor-pointer">
          {text}
        </label>
      </div>
    </div>
  );
};
export default SelectForm;
