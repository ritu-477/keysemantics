
import './App.css';
import DataSecurity from './components/DataSecurity';
import Hero from './components/Hero';
import HowWork from './components/HowWork';
import KeyFaq from './components/KeyFaq';
import KeySemanticsFormWork from './components/KeySemanticsFormWork';
import HeadlessFederated from './components/HeadlessFederated';
import Footer from './components/Footer';
import KeySemanticsApi from './components/KeySemanticsApi'
import BackToTop from './components/BackToTop';

function App() {
  return (
    <>
      <Hero />
      <HowWork />
      <KeySemanticsApi />
      <KeyFaq />
      <HeadlessFederated />
      <DataSecurity />
      <KeySemanticsFormWork />
      <Footer />
      <BackToTop />

    </>
  );
}

export default App;
