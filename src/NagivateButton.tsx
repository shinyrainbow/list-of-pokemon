import clsx from "clsx"

type NagivateButton = {
  disabled: boolean;
  handleClick: () => void;
  text: string;
};

const NagivateButton = ({ disabled, handleClick, text }: NagivateButton) => {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={clsx(
        "border text-[16px] leading-[20px] py-[8px] px-[12px] rounded-[4px] subtitle bg-[#FDFDFD]",
        disabled
          ? "border-[#e3e1e5] text-[#e3e1e5]"
          : "border-[#024E74] text-[#024E74]"
      )}
    >
      {text}
    </button>
  );
};

export default NagivateButton
