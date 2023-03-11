import React, { FunctionComponent } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick: Function;
}

const BlueButton: FunctionComponent<Props> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <div className="inline-block">
      <button
        onClick={() => onClick()}
        className={`py-3 px-7 text-sm text-accent font-normal focus:outline-none rounded-lg border-2 border-accent hover:bg-accent hover:bg-opacity-30 transition-all duration-300 ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default BlueButton;
