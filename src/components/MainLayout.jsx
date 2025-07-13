import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => (
    <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <main className="p-6 overflow-y-auto bg-zinc-800 text-white flex-1">
            <Outlet />
        </main>
        </div>
    </div>
);

export default MainLayout;
