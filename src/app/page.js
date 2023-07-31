import Articals from "./pages/Articals";
import { EasySection } from "./pages/EasySection";
import { Footer } from "./pages/Footer";
import Header from "./pages/Header";
import NavBar from "./pages/NavBar";

export default function Home() {
  return (
   <div>
    <NavBar />
    <Header />
    <EasySection />
    <Articals />
   <Footer />
    
   </div>
  )
}
