'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _switchery = require('switchery');

var _switchery2 = _interopRequireDefault(_switchery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * React switch input component. Note we are using
 * switchery jquery plugin.
 */
var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  /**
   * Constructor
   */
  function Switch(props) {
    _classCallCheck(this, Switch);

    var _this = _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this, props));

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  /**
   * We initialize the Switchery object
   * once the component is mounted
   */


  _createClass(Switch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var input = this.refs.switch;

      /* eslint-disable no-undef, no-new */
      new _switchery2.default(input, this.props.options);
      /* eslint-enable no-new, no-undef */
      input.onchange = this.onChange;
    }

    /**
     * When the user makes a change
     * If an external onChange
     * function is provided, we call that.
     */

  }, {
    key: 'onChange',
    value: function onChange(event) {
      if (this.props.onChange) {
        this.props.onChange(event.target.checked);
      }
    }

    /**
     * renders the component
     */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          {
            className: (0, _classnames2.default)([this.props.className, {
              required: this.props.required
            }])
          },
          _react2.default.createElement(
            'label',
            null,
            this.props.label
          ),
          _react2.default.createElement('input', {
            ref: 'switch',
            type: 'checkbox',
            onClick: this.onChange,
            defaultChecked: this.props.checked
          })
        )
      );
    }
  }]);

  return Switch;
}(_react2.default.Component);

/**
 * Validating propTypes
 */


Switch.propTypes = {
  label: _react2.default.PropTypes.string,
  className: _react2.default.PropTypes.string,
  required: _react2.default.PropTypes.bool,
  checked: _react2.default.PropTypes.bool,
  options: _react2.default.PropTypes.object,
  onChange: _react2.default.PropTypes.func
};

/**
 * Default Props
 */
Switch.defaultProps = {
  value: true,
  required: false
};

/**
 * Exports the switchery component
 */
exports.default = Switch;