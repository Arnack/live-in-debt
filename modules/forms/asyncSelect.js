import React from 'react';
import Select from 'react-select';

class AsyncSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      multi: true,
      creatable: false,
    };
  }
  onChange = (value) => {
    this.setState({
      value: value,
    });
  };

  getUsers = (input) => {
    if (!input) {
      return Promise.resolve({ options: [] });
    }

    return fetch(`http://www.omdbapi.com/?s=${input}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        return { options: json.Search };
      });
  };

  switchToMulti = () => {
    this.setState({
      multi: true,
      value: [this.state.value],
    });
  };
  switchToSingle = () => {
    this.setState({
      multi: false,
      value: this.state.value ? this.state.value[0] : null,
    });
  };

  toggleCreatable = () => {
    this.setState({
      creatable: !this.state.creatable,
    });
  };

  render() {
    const AsyncComponent = this.state.creatable ? Select.AsyncCreatable : Select.Async;
    return (
      <div className="col-12 col-md-6">
        <div className="mb-2">Async Multiple Select with Tags</div>
        <AsyncComponent
          multi={this.state.multi}
          value={this.state.value}
          placeholder="Type movie name to search..."
          labelKey="Title"
          onChange={this.onChange}
          loadOptions={this.getUsers}
        />
        <div className="form-group mt-2">
          <label className="checkbox mr-5">
            <input
              type="radio"
              className="checkbox-control"
              checked={this.state.multi}
              onChange={this.switchToMulti}
            />
            <span className="checkbox-label">&nbsp;Multiselect</span>
          </label>
          <label className="checkbox">
            <input
              type="radio"
              className="checkbox-control"
              checked={!this.state.multi}
              onChange={this.switchToSingle}
            />
            <span className="checkbox-label">&nbsp;SingleValue</span>
          </label>
          <span>&nbsp;&nbsp;</span>
          <label className="checkbox">
            <input
              type="checkbox"
              className="checkbox-control"
              checked={this.state.creatable}
              onChange={this.toggleCreatable}
            />
            <span className="checkbox-label">&nbsp;Creatable?</span>
          </label>
        </div>
      </div>
    );
  }
}

export default AsyncSelect;
