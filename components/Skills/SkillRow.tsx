import React, { FunctionComponent } from "react";
import { skills } from "../../data";
import SkillItem from "./SkillItem";

const SkillRow: FunctionComponent<{
	className?: string;
	skillNames: string[];
}> = ({ skillNames, className }) => {
	return (
		<div className={`flex flex-row gap-3 ${className}`}>
			{skillNames.map((skillName, index) => (
				<SkillItem key={index} skill={skills[skillName]} />
			))}
		</div>
	);
};

export default SkillRow;
