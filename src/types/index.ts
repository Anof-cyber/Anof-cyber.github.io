export type Skill = {
  id: number;
  title: string;
  proficiency: number;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

export type Tool = {
  id: number;
  name: string;
  description: string;
};

export type Experience = {
  id: number;
  jobTitle: string;
  company: string;
  duration: string;
  description: string;
};