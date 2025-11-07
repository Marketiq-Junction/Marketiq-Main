import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
// import Contact from "@/components/contact/page";
import ContactPage from "../../components/contact/page";
export default function page() {
    return (
        <>
            <Navbar />
            {/* <Contact /> */}
            <ContactPage/>
            <Footer />  
        </>
    )
}