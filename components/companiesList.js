import React from 'react';
import { colors, measures } from './theme';

class CompaniesList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <React.Fragment className="list">
          <ul>
            <li key="1">Company 001</li>
            <li key="2">Company 002</li>
            <li key="3">Company 003</li>
            <li key="4">Company 004</li>
            <li key="5">Company 005</li>
            <li key="6">Company 006</li>
            <li key="7">Company 007</li>
            <li key="8">Company 008</li>
            <li key="9">Company 009</li>
            <li key="10">Company 010</li>
            <li key="11">Company 011</li>
          </ul>
        </React.Fragment>
        <style jsx>{`
          .list {
            background-color: ${colors.background2};
            height: 100%;
            border-top-left-radius: ${measures.radius};
            border-bottom-left-radius: ${measures.radius};
          }

          ul {
            margin: 0;
            padding: 0;
            overflow: auto;
            max-height: 100%;
          }

          li {
            list-style: none;
            background-color: ${colors.background2};
            padding: 10px 15px 10px 25px;
            cursor: pointer;
            border-bottom: 1px solid ${colors.primaryColor};
          }

          li:hover {
            background: ${colors.secondaryColor};
          }

          li:active {
            background: ${colors.primaryColor};
        }

          ul li:first-child {
            border-top-left-radius: ${measures.radius};
          }

          ul li:last-child {
            // border-bottom-left-radius: ${measures.radius};
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default CompaniesList;
