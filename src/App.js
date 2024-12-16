
import './App.css';
import DataSecurity from './components/DataSecurity';
import Hero from './components/Hero';
import HowWork from './components/HowWork';
import KeyFaq from './components/KeyFaq';
import FormValidation from './components/FormValidation';
import HeadlessFederated from './components/HeadlessFederated';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Hero />
      <HowWork />
      <KeyFaq />
      <HeadlessFederated/>
      <DataSecurity />
      <FormValidation/>
      <Footer />
    </>
  );
}

export default App;
