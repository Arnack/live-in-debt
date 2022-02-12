import React from 'react';
import Select from 'react-select';

const AU = [
  {
    value: 'australian-capital-territory',
    label: 'Australian Capital Territory',
    className: 'State-ACT',
  },
  { value: 'new-south-wales', label: 'New South Wales', className: 'State-NSW' },
  { value: 'victoria', label: 'Victoria', className: 'State-Vic' },
  { value: 'queensland', label: 'Queensland', className: 'State-Qld' },
  { value: 'western-australia', label: 'Western Australia', className: 'State-WA' },
  { value: 'south-australia', label: 'South Australia', className: 'State-SA' },
  { value: 'tasmania', label: 'Tasmania', className: 'State-Tas' },
  { value: 'northern-territory', label: 'Northern Territory', className: 'State-NT' },
];

class SelectStates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: AU,
      disabled: false,
      clearable: true,
      selectValue: 'new-south-wales',
    };
  }
  updateValue = (newValue) => {
    this.setState({
      selectValue: newValue,
    });
  };

  toggleCheckbox = (e) => {
    let newState = {};
    newState[e.target.name] = e.target.checked;
    this.setState(newState);
  };

  render() {
    let { options, disabled, clearable, selectValue } = this.state;
    return (
      <div className="col-12 col-md-6">
        <div className="mb-2">Simple Custom Select</div>
        <Select
          options={options}
          autfocus
          clearable={clearable}
          disabled={disabled}
          value={selectValue}
          onChange={this.updateValue}
        />
        <div className="form-group mt-2">
          <label className="checkbox mr-5">
            <input
              type="checkbox"
              className="checkbox-control"
              name="disabled"
              checked={this.state.disabled}
              onChange={this.toggleCheckbox}
            />
            <span className="checkbox-label">&nbsp;Disabled</span>
          </label>
          <label className="checkbox">
            <input
              type="checkbox"
              className="checkbox-control"
              name="clearable"
              checked={this.state.clearable}
              onChange={this.toggleCheckbox}
            />
            <span className="checkbox-label">&nbsp;Clearable</span>
          </label>
        </div>
      </div>
    );
  }
}

export default SelectStates;
