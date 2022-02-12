import React from 'react';
import { Tooltip, Button } from 'reactstrap';

class TooltipItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen,
    });
  };

  render() {
    return (
      <span>
        <Button className="mr-1" color="secondary" id={'Tooltip-' + this.props.id}>
          {this.props.item.text}
        </Button>
        <Tooltip
          placement={this.props.item.placement}
          isOpen={this.state.tooltipOpen}
          target={'Tooltip-' + this.props.id}
          toggle={this.toggle}>
          Tooltip Content!
        </Tooltip>
      </span>
    );
  }
}

class TooltipExampleMulti extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tooltips: [
        {
          placement: 'top',
          text: 'Top',
        },
        {
          placement: 'bottom',
          text: 'Bottom',
        },
        {
          placement: 'left',
          text: 'Left',
        },
        {
          placement: 'right',
          text: 'Right',
        },
      ],
    };
  }

  render() {
    return (
      <div className="mb-5">
        {this.state.tooltips.map((tooltip, i) => {
          return <TooltipItem key={i} item={tooltip} id={i} />;
        })}
      </div>
    );
  }
}

export default TooltipExampleMulti;
