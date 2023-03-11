import React, { FunctionComponent } from "react";
import { Skill } from "../../types";

const SkillItem: FunctionComponent<{ skill: Skill }> = ({
  skill: { name, Icon },
}) => {
  return (
    <div className="relative inline-block group">
      <Icon
        size={23}
        className="transition-all cursor-pointer group-hover:text-accent hover:scale-125 dark:text-white text-primaryDark"
      />
      <div className="absolute invisible transition-all transform -translate-x-1/2 opacity-0 left-1/2 -bottom-5 group-hover:visible group-hover:-bottom-7 group-hover:opacity-100 whitespace-nowrap  group-hover:pt-2 pt-0">
        <h3 className="text-sm font-semibold dark:text-primary text-primaryDark font-inconsolata">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default SkillItem;
