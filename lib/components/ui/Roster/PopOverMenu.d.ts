import React from 'react';
import { IconButtonProps } from '../Button/IconButton';
interface PopOverMenuProps {
    menu: React.ReactNode;
    a11yMenuLabel?: string;
    buttonProps?: Partial<IconButtonProps>;
}
export declare const PopOverMenu: ({ menu, a11yMenuLabel, buttonProps, }: PopOverMenuProps) => JSX.Element;
export {};
