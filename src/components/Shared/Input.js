import React from 'react';
import classes from './Input.module.css';
//GOOOOOD PRACTICE !
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/*id={props.input.id} text={props.input.text} === input:{id:'',text:''} */}
      <input ref={ref} {...props.input} />
    </div>
  );
});
export default Input;
