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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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

    function Switch() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Switch);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Switch.__proto__ || Object.getPrototypeOf(Switch)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function () {
            //eslint-disable-line no-undef
            if (_this.props.onChange) {
                _this.props.onChange(_this.elCheckbox.checked);
            }
            if (_this.elCheckbox.checked) {
                _this.elWrapper.className = _this.elWrapper.className.split(' ').join(' ') + ' isChecked';
            } else {
                _this.elWrapper.className = _this.elWrapper.className.replace('isChecked', '');
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Switch, [{
        key: 'componentDidMount',


        /**
         * We initialize the Switchery object
         * once the component is mounted
         */
        value: function componentDidMount() {
            var input = this.elCheckbox;

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
        key: 'render',


        /**
         * renders the component
         */
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                {
                    onClick: this.onClick,
                    className: (0, _classnames2.default)([this.props.className, {
                        required: this.props.required
                    }]),
                    ref: function ref(elWrapper) {
                        return _this2.elWrapper = elWrapper;
                    }
                },
                this.props.label ? _react2.default.createElement(
                    'label',
                    null,
                    this.props.label
                ) : null,
                _react2.default.createElement('input', {
                    ref: function ref(elCheckbox) {
                        return _this2.elCheckbox = elCheckbox;
                    },
                    type: 'checkbox',
                    defaultChecked: this.props.checked
                })
            );
        }
    }]);

    return Switch;
}(_react2.default.Component);

/**
 * Validating propTypes
 */


Switch.propTypes = {
    label: _propTypes2.default.string,
    className: _propTypes2.default.string,
    required: _propTypes2.default.bool,
    checked: _propTypes2.default.bool,
    options: _propTypes2.default.object,
    onChange: _propTypes2.default.func
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