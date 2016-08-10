# react-switchery [![Build Status](https://travis-ci.org/mohithg/react-switchery.svg?branch=master)](https://travis-ci.org/mohithg/react-switchery.svg?branch=master)  [![GitHub version](https://badge.fury.io/gh/mohithg%2Freact-switchery.svg)](https://badge.fury.io/gh/mohithg%2Freact-switchery)   [![npm version](https://badge.fury.io/js/react-switchery.svg)](https://badge.fury.io/js/react-switchery)

react-switchery is a simple react component adopted from [Switchery](http://abpetkov.github.io/switchery/) that helps you turn your default HTML checkbox inputs into beautiful iOS 7 style switches in just few simple steps. You can easily customize switches, so that they match your design perfectly.

## Installation

```
npm install react-switchery --save
```

### Standalone

#### From CDN
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/jquery.switchery/0.8.1/switchery.min.css" />
<script src="https://cdn.jsdelivr.net/jquery.switchery/0.8.1/switchery.min.js"></script>
```
#### From node_modules
```
<link rel="stylesheet" href="node_modules/switchery/standalone/switchery.css" />
<script src="node_modules/switchery/standalone/switchery.js"></script>
```
Or download Switchery and include it in HTML in your own way.

## Properties

### checked - Boolean
The default value for the switch
eg:true - Will keep the switch on
false - Will keep the switch off
Default: true

### required - Boolean
Sets the required class to true, (in case you need validation by your form)
Default: false

### options - Options
The object of options provided by switchery. Refer [switchery](http://abpetkov.github.io/switchery/) for options
Default: {
    color             : '#64bd63'
  , secondaryColor    : '#dfdfdf'
  , jackColor         : '#fff'
  , jackSecondaryColor: null
  , className         : 'switchery'
  , disabled          : false
  , disabledOpacity   : 0.5
  , speed             : '0.1s'
  , size              : 'default'
}

### onChange - Function
The function that is called when the user switches the state of the switch. You will get the boolean value of the state changed.
Default: none

### className - String
The CSS class name for the container div of the switch component
Default: none

### label - string
The label for the switch component
Default: none

## Example

```
import React from 'react';
import Switch from 'react-switchery';

class ComponentWithSwitch extends React.Component {

  onChange(value) {
    console.log(value);
  }

  render() {
    return(
      <Switch
        className="switch-class"
        onChange={this.onChange}
        options={
          {
            color: '#474F79',
            size: 'small'
          }
        }
        checked
      />
    );
  }
}

export default ComponentWithSwitch;

```

## License
MIT
