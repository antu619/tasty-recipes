import { LuDoorOpen } from "react-icons/lu";
import { Link, NavLink, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col">
    <div className="flex justify-end w-full">
    <label htmlFor="my-drawer-2" className="block m-2 w-[36px] lg:hidden"><LuDoorOpen className="text-4xl" /></label>
    </div>
      <div className="lg:hidden">
      <p className="text-center mt-5">Welcom to dashboard</p>
      <p className="text-center">Click the door button to open the drawer.</p>
      </div>
    <Outlet/>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-1">
      <li><Link to="/">Back to Home</Link></li>
      <li><Link to="/dashboard">User Info</Link></li>
      <li><NavLink to="/dashboard/allSeaFoods">All Sea Foods</NavLink></li>
      <li><NavLink to="/dashboard/addSeaFoods">Add Sea Foods</NavLink></li>
    </ul>
  
  </div>
</div>
    );
};

export default DashboardLayout;