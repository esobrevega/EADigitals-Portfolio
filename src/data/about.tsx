import { Calendar, CodeIcon, MapPin, PlusCircle } from "lucide-react";

export const techStackAbout = [
    "React",
    "TypeScript"
]

export interface InfoProps {
    icon: React.ReactElement;
    description: string,
}

const getAge = (birthDate: string) => {
  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
};

export const infos: InfoProps[] = [
    {
        icon: <MapPin className="w-5 h-5"/>,
        description: "Based in Manila, Philippines"
    }
    ,
    {
        icon: <PlusCircle className="w-5 h-5"/>,
        description: `${getAge("1997-11-25")} Years Old`
    }
    ,
    {
        icon: <CodeIcon className="w-5 h-5"/>,
        description:"Business Operations | 24/7 PROD Support | Incident Management | Tools Automation | Full Stack Dev"
    }
    ,
    {
        icon: <Calendar className="w-5 h-5"/>,
        description: `${getAge("2019-9-2")}+ Years of Work Experience`
    }

]