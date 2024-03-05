
const born =  new Date(2004, 1, 20);
const current = new Date();
const differenceInMilliseconds = current.getTime() - born.getTime();

const age = Math.floor((differenceInMilliseconds / (1000 * 60 * 60 * 24))/365.5)


function AboutMe() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-28 font-nunito bg-white bg-opacity-95 w-9/12 h-2/3 shadow-xl rounded-xl">
        <h1 className="text-4xl mb-5 mt-2 font-bold text-white bg-principal bg-opacity-90 p-4 rounded-xl cursor-pointer hover:shadow-black hover:underline">Sobre mi</h1>
        <div className="font-nunito mb-14 font-semibold text-xl">
          
          <p className="mb-5 mr-10 ml-10"><i className="font-bold text-2xl">S</i>oy Bernabé Deusich, un apasionado desarrollador Fullstack con un enfoque destacado en el desarrollo web backend. A mis {age} años, he construido una sólida base de habilidades técnicas y tengo una dedicación innata para resolver problemas de manera eficiente.</p>
          <p className="mb-5 mr-10 ml-10">Estoy fortaleciendo mis conocimientos mediante la educación formal y principalmente el aprendizaje autodidacta. Esto me ha permitido adquirir habilidades analíticas y detallistas, fundamentales para el desarrollo de soluciones robustas y escalables.</p>
          <p className="mb-5 mr-10 ml-10">Me destaco por mi habilidad para abordar desafíos, siempre buscando soluciones que combinen eficiencia y efectividad. Además, cuento con habilidades oratorias y colaborativas que respaldan mi capacidad para comunicar ideas de manera efectiva y colaborar en equipos de trabajo. </p>     
          <p className="mb-5 mr-10 ml-10">Estoy entusiasmado con la posibilidad de aportar mis habilidades y compromiso a proyectos desafiantes. Me encantaría discutir cómo mi experiencia y visión pueden contribuir al éxito de su equipo. </p>
          
        
          
        </div>
       
      </div>
    </>
  )
}
export default AboutMe