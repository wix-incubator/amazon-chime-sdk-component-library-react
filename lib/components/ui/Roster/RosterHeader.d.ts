import React, { ChangeEvent, ReactNode } from 'react';
import { BaseProps, FocusableProps } from '../Base';
export interface RosterHeaderProps extends BaseProps, FocusableProps {
    /** The title of the roster header. */
    title: string;
    /** The number of attendees in a meeing. */
    badge?: number;
    /** The string value to search in a roster. */
    searchValue?: string;
    /** The callback fired when the search value is changed. */
    onSearch?: (e: ChangeEvent<HTMLInputElement>) => void;
    /** The callback fired when roster is closed. */
    onClose?: () => void;
    /** The PopOver menu for more options. */
    menu?: React.ReactNode;
    /** The label for availability. */
    a11yMenuLabel?: string;
    /** Label shown for search icon button, by default it is "Open search" */
    searchLabel?: string;
    /** Use children to render custom elements in the RosterHeader */
    children?: ReactNode | ReactNode[];
}
export declare const RosterHeader: React.FC<RosterHeaderProps>;
export default RosterHeader;
