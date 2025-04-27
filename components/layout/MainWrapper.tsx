import Header from './Header';
import Footer from './Footer';

interface MainWrapperProps {
  children: React.ReactNode;
}

const MainWrapper = ({ children }: MainWrapperProps) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainWrapper; 