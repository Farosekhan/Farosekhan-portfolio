const SkillCard = ({ title, description, imageUrl, buttonText }) => {
    return (
        
      <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-68 h-90 max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
        <div className="min-h-[256px]">
          <img src={imageUrl} className="w-full" alt={title} />
        </div>
        <div className="p-6">
          <h3 className="text-gray-800 text-2xl font-bold">{title}</h3>
          <p className="mt-4 text-sm text-gray-500 leading-relaxed">{description}</p>
          
        </div>
      </div>
      
    );
  };
  
  const Skills = () => {
    const skillsData = [
      {
        id: 1,
        title: "HTML",
        imageUrl: "https://img.freepik.com/free-vector/html5-programming-internet-website-development-web-application-engineering-script-writing-html-code-optimization-programmer-fixing-bugs_335657-263.jpg?ga=GA1.1.1634328559.1738947300&semt=ais_incoming",
        
      },
      {
        id: 2,
        title: "CSS",
        imageUrl: "https://img.freepik.com/premium-photo/css-website-3d-icon-isolated-white-background_1108860-2377.jpg?ga=GA1.1.1634328559.1738947300&semt=ais_incoming",
       
      },
      {
        id: 3,
        title: "TAILWIND CSS",
        imageUrl: "https://www.svgrepo.com/show/333609/tailwind-css.svg",
        
      },
      {
        id: 4,
        title: "JAVASCRIPT",
        imageUrl: "https://img.freepik.com/premium-vector/javascript-file-icon_1237743-31592.jpg?ga=GA1.1.1634328559.1738947300&semt=ais_incoming",
        
      },
      {
        id: 5,
        title: "React",
        imageUrl: "https://img.freepik.com/premium-photo/computer-monitor-with-blue-atom-screen_1055645-24493.jpg?ga=GA1.1.1634328559.1738947300&semt=ais_incoming  ",
        buttonText: "Learn More"
      },
      
    ];
  
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {skillsData.map((skill) => (
          <SkillCard
            key={skill.id}
            title={skill.title}
            description={skill.description}
            imageUrl={skill.imageUrl}
            buttonText={skill.buttonText}
          />
        ))}
      </div>
    );
  };
  
  export default Skills;