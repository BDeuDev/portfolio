import SkillItem from './skill-item';
import { faNodeJs, faJs, faReact, faHtml5, faCss3Alt, faGitAlt,faGithub,faDocker} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, } from '@fortawesome/free-solid-svg-icons';



const Skills = () => {
  const icons = [faNodeJs,faReact, faDatabase,faJs, faHtml5, faCss3Alt, faGitAlt,faGithub,faDocker]
  const colors = ['text-lime-600',
    'text-sky-400',
    'text-sky-400',
    'text-yellow-400',
    'text-orange-600',
    'text-sky-400',
    'text-orange-600',
    'text-white',
    'text-sky-400'
    
  ]
  return (
    <>
      <div className='flex flex-col items-center justify-center w-6/12 mt-20'>
        <h1 className='text-3xl text-white mb-3 mt-8 font-bold bg-principal bg-opacity-90 p-4 rounded-xl hover:shadow-black cursor-pointer hover:underline'>Have experience with</h1>
        <div className='flex flex-wrap max-w-max items-center justify-center border bg-secundario bg-opacity-80 p-6 rounded-xl  hover:shadow-black '>
          {icons.map((value, index) => (
            <SkillItem icon={value} key={index} className={`${colors[index]} `} />
          ))}
        </div>

          {/* <ProgressBar percent={75} className=''/> */}

      </div>

    </>
  );
};

export default Skills;