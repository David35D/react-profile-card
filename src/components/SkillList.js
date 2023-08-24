import Skill from "./Skill";

//   

const skills = [
    {
      title: "HTML",
      level: "advanced",
      color: "#d17f0a",
      id: 0
    },
    {
      title: "CSS",
      level: "advanced",
      color: "#0f5fdf",
      id: 1
    },
    {
      title: "JavaScript",
      level: "intermediate",
      color: "#e1c202",
      id: 2
    },
    {
      title: "React",
      level: "beginner",
      color: "#521c81",
      id: 3
    },
    {
      title: "C++",
      level: "intermediate",
      color: "#193773",
      id: 4
    }
];

const SkillList = () => {
    return (
        <div className="skills">
            {skills.map((skill) => (
                <Skill 
                    key={skill.id}
                    color={skill.color}
                    title={skill.title}
                    level={skill.level}
                />
            ))}
        </div>
    );
};

export default SkillList;