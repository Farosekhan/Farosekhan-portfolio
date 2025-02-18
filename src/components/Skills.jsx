import Frontend from "../Skills/Frontend";
import Backend from "../Skills/Backend";
import Database from "../Skills/Database";  
const Skills = () => {
  return (

    <div className="container-fluid pt-30 bg-gradient-to-r from-blue-50 to-purple-50">
         <h1 className="text-5xl font-bold  font-serif text-gray-900 sm:text-5xl gap-4 lg:text-7xl my-10 mx-20 flex align-center justify-center mt-20">SKILLS</h1>

        <h1 className="text-3xl font-bold text-gray-900 sm:text-2xl gap-4 lg:text-3xl my-10 mx-20 flex align-center justify-center mt-20">FRONTEND TECHNOLOGY</h1>
      <Frontend />
      <h1 className="text-3xl font-bold text-gray-900 sm:text-2xl gap-4 lg:text-3xl my-10 mx-30 flex align-center justify-center mt-20">BACKEND TECHNOLOGY</h1>
        <Backend />
        <h1 className="text-3xl font-bold text-gray-900 sm:text-2xl gap-4 lg:text-3xl my-10 mx-30 flex align-center justify-center mt-20">DATABASE TECHNOLOGY</h1>
        <Database/>
        <div className="mb-10"></div>
    </div>
  )
}

export default Skills
