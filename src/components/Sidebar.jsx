
import {Button} from '@mui/material';
import { IoMdAdd } from "react-icons/io";
import './Sidebar.css';
import SIdebarOption from './SidebarOption';
import { FaInbox } from "react-icons/fa";

export default function SIdebar({}) {



    return(<> 
    <div className="sidebar">
        <Button className="sidebar-compose"  startIcon={<IoMdAdd size={32} />}>
            Compose
        </Button>

        <SIdebarOption Icon={FaInbox} title={"Inbox"} number={54} />
    </div>
    
    </>)
}