import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {

  return (
    <>
      <Navbar title='UPLOAD DE ARQUIVO CSV' />
      <main>{children}</main>
      <Footer />
    </>
  )
}