import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RightNavbar from "../components/layout-component/RightNavbar";
import LeatestNews from "../components/LeatestNews";
import Navbar from "../components/Navbar";



const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LeatestNews></LeatestNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto mt-8">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto py-14 grid md:grid-cols-12 gap-2">
                <aside className="left col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className="col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className="right col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;