import MyTypedComponent from "./typingEffect"


const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col items-start justify-start mt-5 font-nunito ">
          <h1 className="text-black text-7xl mb-5 cursor-pointer ">Welcome.</h1>
          <h1 className="text-black text-7xl mb-5 cursor-pointer ">I'm Bernabé,</h1>
        </div>
        <MyTypedComponent />
      </div>
    </>
  )
}
export default Home