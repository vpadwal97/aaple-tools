import CopyButton from "./CopyButton";

type ResultBoxProps = {
  label?: string;
  value: string;
  id?: string;
  name?: string;
  heightClass?: string;
};

export function ResultBox({
  label,
  value,
  id,
  name,
  heightClass = "h-24",
}: ResultBoxProps) {
  return (
    <div>
      <p className="mb-2">
        <strong>{label}</strong>
      </p>

      <div className="relative">
        <div className="absolute end-0 top-0 p-2">
          <CopyButton text={value} />
        </div>

        <textarea
          className={`textarea-base w-full ${heightClass}`}
          value={value}
          id={id}
          name={name}
          readOnly
        />
      </div>
    </div>
  );
}
