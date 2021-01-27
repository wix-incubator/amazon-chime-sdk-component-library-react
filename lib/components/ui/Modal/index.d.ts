import { FC, HTMLAttributes } from 'react';
import { BaseProps } from '../Base';
export declare type ModalSize = 'md' | 'lg' | 'fullscreen';
export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>, BaseProps {
    /** The callback fired when the modal is closed. */
    onClose: () => void;
    /** The size of the modal. */
    size?: ModalSize;
    /** The rootId of the modal. */
    rootId?: string;
}
export declare const Modal: FC<ModalProps>;
export default Modal;
