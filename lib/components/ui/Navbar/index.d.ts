import React from 'react';
import { FlexProps } from '../Flex';
import { FocusableProps, BaseProps } from '../Base';
export interface NavbarProps extends FlexProps, BaseProps, FocusableProps {
    /** Classname to apply custom CSS styles */
    className?: string;
    /** Any react components or HTML elements */
    children?: any;
}
export declare const Navbar: React.FC<NavbarProps>;
export default Navbar;
