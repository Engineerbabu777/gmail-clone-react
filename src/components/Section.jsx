

import './Section.css';

export default function Section({title, Icon,color,selected}) {



    return(<>
    <div className={`${selected && "section--selected"} section`}
    style={{borderBottom:`3px solid ${color}`,color:`{${selected && color } !important`}}
    >
        <Icon  />
        <h4>{title}</h4>
     
    </div>
    
    </>)
}