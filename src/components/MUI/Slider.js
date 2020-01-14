import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 700,
    top: '20%',
    left: '50%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
  }
});


export default function Sliders() {
  const classes = useStyles();
  const [value, setValue] = useState(20)

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <div className={classes.root}>
        <Typography id="discrete-slider" gutterBottom>
          Font Sizing with slider
        </Typography>
        <Slider
          defaultValue={value}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
          onChange={handleChange}
        />
        <Typography id="font" style={{ fontSize: value }}>
          Font Size {value}
        </Typography>
      </div>
    </>
  );
}
