import Skill from "./Skill";

const SkillList = () => {
    return (
        <div className="skills">
            <Skill 
                color='#d17f0a'
                title='HTML'
            />
            <Skill 
                color='#0f5fdf'
                title='CSS'
            /> 
            <Skill
                color='#e1c202'
                title='JavaScript'
            />
            <Skill
                color='#193773'
                title='C++'
            />
            <Skill
                color='#521c81'
                title='React'
            />
        </div>
    );
};

export default SkillList;