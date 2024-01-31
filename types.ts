import { IconType } from "react-icons";

export interface NavContent {
  name: string,
  offset:number
  id: string
}

export interface Experience {
	title: string;
  company: string;
	duration: string;
	contributions: string[];
	imageSource: string;
  skillsList: string[]
  website: string
}

export interface Skill {
  name: string,
  Icon: IconType
}

export interface Project {
  name: string,
  subheader: string,
  description: string,
  technologies: string[],
  projectLink?: string,
  githubLink?:string,
  animation:Object,
  imagePath:string,
  award?:Award
}

export interface OtherProject {
  name: string,
  description: string,
  technologies: string[],
  projectLink?: string,
  githubLink?:string
  imagePath:string
}

export interface Award {
  name: string,
  event:string,
  link:string
}
