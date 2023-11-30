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
        "border p-[8px] rounded-[4px]",
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
