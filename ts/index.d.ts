/**
 * Typescript definitions for react-switchery 1.1.5
 * Project: https://github.com/mohithg/react-switchery
 * Definitions by: Peter Goodlad <https://github.com/aetharr>
 * Typescript Version 2.5.3
 */

import * as React from 'react';


/**
 * React Switchery wrapper component
 */
export default class Switch extends React.Component<SwitcheryProps, any> {}

/**
 * Props definition for React Switchery
 */
export interface SwitcheryProps {
    /**
     * Classname for wrapper component
     */
    className?: string;
    /**
     * Whether the switch element is checked or not
     */
    checked?: boolean;
    /**
     * Is the switch required
     */
    required?:boolean;
    /**
     * Text content to add to a label, the label will not be created if this is empty.
     */
    label?: string;
    /**
     * A Callback function when the switch is toggled with a parameter containing the new state
     */
    onChange?: (checked:boolean) => any;
    /**
     * An object containing various Switchery-specific options to customse the element
     */
    options?: ISwitcheryOptions;
}


/**
 * Switchery-specific options for customising the element
 */
export interface ISwitcheryOptions {
    /**
     * Color of the switch element (HEX or RGB value)
     */
    color?:string;
    /**
     * Secondary color for the background color and border, when the switch is off
     */
    secondaryColor?:string;
    /**
     * Default color of the jack/handle element
     */
    jackColor?:string;
    /**
     * Color of unchecked jack/handle element
     */
    jackSecondaryColor?:string;
    /**
     * Class name for the switch element
     */
    className?:string;
    /**
     * Enable or disable click events and changing the state of the switch
     */
    disabled?:boolean;
    /**
     * Opacity of the switch when disabled is true (0 to 1)
     */
    disabledOpacity?:number;
    /**
     * Length of time that the transition will take, ex. '0.4s', '1s', '2.2s' (Note: transition speed of the handle is twice shorter)
     */
    speed?:string;
    /**
     * Size of the switch element ("small" or "large")
     */
    size?:string;
}