import React from 'react';
import classNames from 'classnames';

/**
 * React switch input component. Note we are using
 * switchery jquery plugin.
 */
class Switch extends React.Component {

  /**
   * Constructor
   */
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  /**
   * We initialize the Switchery object
   * once the component is mounted
   */
  componentDidMount() {
    const input = this.refs.switch;

    /* eslint-disable no-undef, no-new */
    new Switchery(input, this.props.options);
    /* eslint-enable no-new, no-undef */
    input.onchange = this.onChange;
  }

  /**
   * When the user makes a change
   * If an external onChange
   * function is provided, we call that.
   */
  onChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event.target.checked);
    }
  }

  /**
   * renders the component
   */
  render() {
    return (
      <div>
        <div
          className={classNames([
            this.props.className,
            {
              required: this.props.required,
            },
          ])}
        >
          <label>{this.props.label}</label>
          <input
            ref="switch"
            type="checkbox"
            onClick={this.onChange}
            defaultChecked={this.props.checked}
          />
        </div>
      </div>
    );
  }
}

/**
 * Validating propTypes
 */
Switch.propTypes = {
  label: React.PropTypes.string,
  className: React.PropTypes.string,
  required: React.PropTypes.bool,
  checked: React.PropTypes.bool,
  options: React.PropTypes.object,
  onChange: React.PropTypes.func,
};

/**
 * Default Props
 */
Switch.defaultProps = {
  value: true,
  required: false,
};

/**
 * Exports the switchery component
 */
export default Switch;
