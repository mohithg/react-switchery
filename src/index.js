import React from 'react';
import classNames from 'classnames';
/* eslint-disable */
import Switchery from 'mohithg-switchery';
/* eslint-enable */
import PropTypes from 'prop-types';


/**
 * React switch input component. Note we are using
 * switchery jquery plugin.
 */
class Switch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * We initialize the Switchery object
   * once the component is mounted
   */
  componentDidMount() {
    const input = this.elCheckbox;
    const checked = this.props.checked;
    /* eslint-disable */
    this.setState({
      checked,
    });
    /* eslint-enable */
    /* eslint-disable no-undef, no-new */
    new Switchery(input, this.props.options);
    /* eslint-enable no-new, no-undef */
    input.onchange = this.onChange;
    this.setChecked();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.checked !== nextProps.checked) {
      this.setState({
        checked: nextProps.checked,
      });
      this.setChecked();
    }
  }

  /**
   * When the user makes a change
   * If an external onChange
   * function is provided, we call that.
   */
  onClick = () => { // eslint-disable-line
    // If switch is disabled don't trigger anything
    if (this.props.options.disabled) {
      return;
    }
    if (this.props.onChange) {
      this.props.onChange(this.elCheckbox.checked);
    }
    this.setChecked();
  };

  setChecked() {
    const classList = this.props.className !== undefined ? this.props.className.split(" ") : [];
    if (this.elCheckbox.checked) {
      classList.push("isChecked");
    }
    this.elWrapper.className = classList.join(" ");
  }

  /**
   * renders the component
   */
  render() {
    return (
      <div
        onClick={this.onClick}
        className={classNames([
          this.props.className,
          {
            required: this.props.required,
          },
        ])}
        ref={elWrapper => { this.elWrapper = elWrapper; }}
      >
        {(this.props.label) ? <label>{this.props.label}</label> : null}
        <input
          ref={elCheckbox => { this.elCheckbox = elCheckbox; }}
          checked={this.state.checked}
          type="checkbox"
        />
      </div>
    );
  }
}

/**
 * Validating propTypes
 */
Switch.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
  checked: PropTypes.bool,
  options: PropTypes.object,
  onChange: PropTypes.func,
};

/**
 * Default Props
 */
Switch.defaultProps = {
  value: true,
  required: false,
  options: {},
};

/**
 * Exports the switchery component
 */
export default Switch;
