import { colors } from '../components/theme';
import Menu from '../components/menu';

export default props => (
  <div className="layout">
    <Menu />
    <section className="wrapper">{props.children}</section>
    <style jsx>{`
      .layout {
        background: ${colors.background};
        min-height: 100vh;
      }
      .wrapper {
        padding: 1rem;
      }
    `}</style>
    <style jsx global>{`
      body {
        margin: 0;
        color: ${colors.fontColor};
      }
    `}</style>
  </div>
);
