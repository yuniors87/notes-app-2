import React from 'react';
import Layout from '../components/layout';
import CompaniesList from '../components/companiesList';
import Title from '../components/title';
import NotesList from '../components/notesList';

class Notes extends React.Component {
  render() {
    return (
      <Layout>
        <Title title="Hola mundo" />
        <div className="dashboard">
          <div className="companies">
            <CompaniesList />
          </div>
          <NotesList className="notes" />
        </div>
        <style jsx>{`
          .dashboard {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            grid-template-rows: 1fr;
            height: 100%;
          }

          .companies {
            grid-column: 1 / span 2;
            height: 100%;
          }

          .notes {
            color: red;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Notes;
