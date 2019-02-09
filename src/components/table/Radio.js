import React, { Component } from 'react'
import styles from './Radio.module.css'

export default class Radio extends Component {
  constructor(props) {
    super();

    this.state = {
    };
  }


  onRadioClick(e) {
    let value = e.target.value
    console.log('radio clicked : ' + value)
    this.props.radioHandler(value);
  }

  render() {
    const conf = value => {
      return (this.props.conf === value?true:false)
    }

    return (
      <div className={styles['switch-field']}>
        <input type="radio" id="switch_left" name="switch_2" value="east" checked={conf('east')} onChange={this.onRadioClick.bind(this)}/>
        <label htmlFor="switch_left">East</label>
        <input type="radio" id="switch_right" name="switch_2" value="west" checked={conf('west')} onChange={this.onRadioClick.bind(this)}/>
        <label htmlFor="switch_right">West</label>
      </div>
    )
  }
}
