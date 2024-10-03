import ActionButton from "./ActionButton";

type Props = {
  text: string;
  imgPath: string;
  onClick: () => void;
};

const BigButton = ({ text, imgPath, onClick }: Props) => {
  return (
    <div className="bg-primary-200 flex-col items-center align-middle w-60 rounded-2xl">
      <div className="p-10">
        <img src={imgPath} alt="Icon" />
      </div>
      <div className="px-5 pb-5 flex items-center align-middle">
        <ActionButton height="30px" width="260px" text={text} textSize="24sp" onClick={onClick} />
      </div>
    </div>
  );
};

export default BigButton;