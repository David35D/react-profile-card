const Skill = (props) => {
    return (
        <div className="skill" style={{backgroundColor: `${props.color}`}}>
            <h3 className="skill-title">{props.title}</h3>
        </div>
    );
}

export default Skill;