import { BsBellFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { Badge } from "rsuite";
import Alertdialogs from "../Alertdialogs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../types/redux";


const Sidebarfooter = () => {
    const { user } = useSelector((state:RootState) => state.userSlice);
    const navigate = useNavigate();
	return (
		<>
			<div className="sidebar-footer">
				<span onClick={() => navigate("/notifications")} >
					<Badge content={user?.unseenNotifications.length} color="yellow" >
						<BsBellFill />
					</Badge>
					{/* <span className="badge badge-pill badge-warning notification">3</span> */}
				</span>
				<span >
					<Badge content={99} color="green">
						<HiMail style={{ fontSize: 18 }} />
					</Badge>
				</span>
				<span >
                <Badge  color="red" >
                    <FiSettings />
                </Badge>
					
				
				</span>
				<span >
                <Alertdialogs  />
					{/* <FaPowerOff /> */}
				</span>
			</div>
		</>
	);
};

export default Sidebarfooter;
