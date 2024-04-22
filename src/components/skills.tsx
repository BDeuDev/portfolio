import SkillItem from './skill-item';
import { faNodeJs, faJs, faReact, faHtml5, faCss3Alt, faGitAlt, faGithub, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faLock } from '@fortawesome/free-solid-svg-icons';
import { } from "react-icons/fa";


const Skills = () => {
  const icons = [faNodeJs, faReact, faDatabase, faJs, faHtml5, faCss3Alt, faGitAlt, faGithub, faDocker, faLock,]
  const techs = ['NodeJs', 'ReactJs', 'MySql', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'GiHub', 'Docker', 'JWT']
  const colors = ['text-lime-600',
    'text-sky-400',
    'text-sky-400',
    'text-yellow-400',
    'text-orange-600',
    'text-sky-400',
    'text-orange-600',
    'text-white',
    'text-sky-400',
    'text-white',


  ]
  return (
      <div className='flex flex-col items-center justify-center lg:w-6/12 mobile:w-11/12 mt-12'>
        <div className='flex flex-wrap max-w-max items-center justify-center  shadow-md bg-[#CCCCCC] p-6 rounded-xl   '>
          {icons.map((value, index) => (
            <SkillItem icon={value} key={index} className={`${colors[index]} `} name={techs[index]} />
          ))}
        </div>
      </div>

  );
};

export default Skills;