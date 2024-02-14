import  { ReactNode } from 'react';
import NavBar from "./../NavBar/NavBar";
import Footer from "./../Footer/Footer";



const Page = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Page;
