import { Home, Info, Projects, Contact, Footer } from './sections';
import { Loader, Logo } from './components';

export const App = () => (
  <>
    <Loader />
    <Logo />
    <Home />
    <Info />
    <Projects />
    <Contact />
    <Footer />
  </>
);
