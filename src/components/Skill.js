const Skill = (props) => {
    
    const level = props.level;
    let emoji = '💪';

    if (level === 'beginner') {
        emoji = '👶';
    } else if (level === 'intermediate') {
        emoji = '👍';
    }

    return (
        <div className="skill" style={{backgroundColor: `${props.color}`}}>
            <h3 className="skill-title">{props.title} {emoji}</h3>
        </div>
    );
}

export default Skill;