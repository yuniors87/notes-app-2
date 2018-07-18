import {colors} from './theme'

export default props => (
  <h2>
    {props.title}
    <style jsx>{`
      h2 {
        margin: 0.5rem 0;
      }
    `}</style>
  </h2>
);
