import Navbar from "./Navbar";
import Footer from "./Footer";


export default function MainLayout({
children
}){


return (

<div className="
min-h-screen
bg-black
text-white
">


<Navbar/>


<main className="pt-20">
  {children}
</main>


<Footer/>


</div>

)

}