import { FC } from "react";

const Header: FC<{ chapter: string; title: string }> = ({ chapter, title }) => {
  return (
    <div className="flex flex-row items-baseline mb-8 ">
      <h1 className="font-semibold text-accent text-6xl font-inconsolata">
        {chapter}
      </h1>
      <h1 className="ml-3 text-3xl font-bold font-poppins dark:text-primary text-primaryDark">
        {title}
      </h1>
    </div>
  );
};
export default Header;
