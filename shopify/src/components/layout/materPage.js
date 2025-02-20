import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

export default function MasterPage() {
    return (

        <>
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </>
    )
}