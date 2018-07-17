import React from 'react';
import Layout from '../components/layout';
import CompaniesList from '../components/companiesList';

class Notes extends React.Component {
  render() {
    return (
      <Layout>
        <h2>Esto es el dashbor principal</h2>
        <CompaniesList />
      </Layout>
    );
  }
}

export default Notes;
