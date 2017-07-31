import React from 'react';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
  root: {
    display: 'flex',
    height: 124,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
};

/**
 * The orientation of the slider can be reversed and rotated using the `axis` prop.
 */
const Filters = ( props ) => (
  <div style={{marginRight: 20}}>
    <div style={styles.root}>
      <p>Max</p>
      <Slider style={{width: 350}} axis="x-reverse" />
      <p>Min</p>
    </div>
    <RaisedButton
      label="Load Data"
      primary={true}
      style={{margin: 10}}
      fullWidth={true}
      onClick={() => { props.getRentals() }}
      />
  </div>
);

export default Filters;
