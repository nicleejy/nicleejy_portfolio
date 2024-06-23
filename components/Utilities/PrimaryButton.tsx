import React, { FunctionComponent, ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  className?: string;
  onClick: () => void;
}

const PrimaryButton: FunctionComponent<PrimaryButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <div className="inline-block">
      <button
        onClick={onClick}
        className={`py-3 px-7 text-sm text-accent font-normal focus:outline-none rounded-lg border-2 border-accent hover:bg-accent/30 transition-all dark:hover:text-secondary duration-200 ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
