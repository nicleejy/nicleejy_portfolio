import React, { FunctionComponent, ReactNode } from "react";

interface SecondaryButtonProps {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  onClick: () => void;
}

const SecondaryButton: FunctionComponent<SecondaryButtonProps> = ({
  children,
  icon,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`inline-block group cursor-pointer ${className}`}
    >
      <div className="flex gap-2 items-center transition-all duration-300 font-inconsolata text-white text-sm group-hover:text-accent ">
        {children}
        {icon && <span>{icon}</span>}
      </div>
      <span className="block max-w-0 group-hover:max-w-full transition-all rounded-sm duration-300 h-0.5 bg-accent" />
    </button>
  );
};

export default SecondaryButton;