import Activity from "./Activity.jsx";
import Events from "./Events.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

export default function Home(){
    return(
        <>
            <Navbar/>
            <Events/>
            <Activity/>
            <Events/>
            <Activity/>
            <Footer/>
        </>
    )
}