import AnimatedOutlet from "../../animation/animatedOutlet";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Root() {
    return (<>
        <Navbar />
        <AnimatedOutlet />
        <Footer/>
    </>)
}