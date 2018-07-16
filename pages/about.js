import React from 'react';
import { colors } from '../components/theme';
import Layout from '../components/layout';

class About extends React.Component {
  render() {
    return (
      <Layout>
        <h2>Esto es el about</h2>
        <p>
          Deserunt fugiat tempor consectetur anim consequat velit commodo
          laboris cupidatat nulla. Laboris quis voluptate et voluptate ex
          ullamco elit. Minim nulla aliquip ut reprehenderit dolore. Irure nisi
          elit consectetur magna dolor aute reprehenderit aliquip pariatur
          deserunt. Id commodo quis nulla proident aliqua qui incididunt. Aliqua
          reprehenderit proident culpa consequat laboris non veniam esse
          proident eiusmod.
        </p>
        <style jsx>{`
          p {
            background: ${colors.background2};
            padding: 10px;
            border-radius: 10px;
          }
        `}</style>
      </Layout>
    );
  }
}
export default About;
