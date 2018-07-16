import Layout from '../components/layout';
import { colors } from '../components/theme';

export default () => (
  <Layout>
    <h1>Welcome to next.js!</h1>
    <h3>Bienvenido</h3>
    <style jsx>{`
      h1 {
        font-size: 2rem;
        color: ${colors.primaryColor};
        background: ${colors.background2};
      }
      h3 {
        font-size: 1.5rem;
        color: ${colors.secondaryColor};
        background: ${colors.background2};
      }
    `}</style>
  </Layout>
);
