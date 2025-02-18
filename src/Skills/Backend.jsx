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
        title: "NODE JS",
        imageUrl: "https://wallpapercave.com/wp/wp5070716.jpg",
        buttonText: "Learn More"
      },
      {
        id: 2,
        title: "EXPRESS JS",
        imageUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*7fe7SkSNP6Y8PvTRm4Jl6Q.png",
        buttonText: "View Projects"
      }
      
      
    ];
  
    return (
      <div className="flex flex-wrap gap-2 justify-center gap-4">
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