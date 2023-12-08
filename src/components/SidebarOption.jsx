import './SidebarOption.css';
export default function SIdebarOption({Icon, title,number}) {
    return(<>
        <div className="sidebar-option">
            <Icon style={{margin:5}} size={28}/>
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    
    </>)
}
