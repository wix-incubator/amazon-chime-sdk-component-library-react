/// <reference types="react" />
import { PopOverItemProps } from '../PopOver/PopOverItem';
import { FocusableProps, BaseProps } from '../Base';
export interface NavbarItemProps extends FocusableProps, BaseProps {
    /** Any icon from the library for button in navbar item */
    icon: JSX.Element;
    /** The callback fired when the icon is clicked */
    onClick: () => void;
    /** Label for navbar item */
    label: string;
    /** PopOver menu if needed in navbar item */
    popOver?: PopOverItemProps[] | null;
    /**  Apply this prop to receive visual feedback that the button is 'active' */
    isSelected?: boolean;
}
export declare const NavbarItem: ({ onClick, label, icon, isSelected, popOver, ...rest }: NavbarItemProps) => JSX.Element;
export default NavbarItem;
