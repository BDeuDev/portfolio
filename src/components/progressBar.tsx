interface Props  {
    percent:number;
    className: string;
}

const ProgressBar:React.FC<Props> = ({ percent,className }) => {
    return (
        <>
        <div className={`${className} flex flex-col items-center justify-center bg-secundario bg-opacity-80 w-full h-24 `}>
            <h1 className="text-3xl mb-5">Experience</h1>
           <div className="relative bg-gray-300 h-5 w-9/12 shadow-black mb-5">
        <div
          style={{ width: `${percent}%` }}
          className={` bg-gradient-to-r from-slate-300 via-slate-600 to-slate-950 h-full transition-all ease-in-out duration-300 w-full`}
        ></div>
      </div> 
        </div>
        
        </>
      
    );
  };
  export default ProgressBar