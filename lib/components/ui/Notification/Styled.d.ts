/// <reference types="react" />
import { NotificationProps } from '.';
import { Severity } from '../../../providers/NotificationProvider';
interface StyledNotificationProps extends NotificationProps {
    severity: Severity;
}
export declare const StyledCloseIconButton: import("styled-components").StyledComponent<import("react").ForwardRefExoticComponent<import("../Button/IconButton").IconButtonProps & import("react").RefAttributes<HTMLButtonElement>>, import("styled-components").DefaultTheme, {}, never>;
export declare const StyledNotification: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, StyledNotificationProps, never>;
export {};
