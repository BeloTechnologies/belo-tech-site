// Sessions.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Privacy from "../components/Privacy";
import SessionsHero from '../components/SessionsHero';
import FAQ from '../components/FAQ';
import SessionsPreview from '../components/SessionsPreview';

function Sessions() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <SessionsHero />

      {/* Sessions Preview Section */}
      <section id="preview">
        <SessionsPreview />
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FAQ />
      </section>

      {/* Privacy Section */}
      <section id="privacy-policy">
        <Privacy />
      </section>
    </div>
  );
}

export default Sessions;