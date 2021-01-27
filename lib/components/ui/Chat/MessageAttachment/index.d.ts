import { FC, HTMLAttributes } from 'react';
import { BaseProps } from '../../Base';
export interface MessageAttachmentProps extends Omit<HTMLAttributes<HTMLDivElement>, 'css'>, BaseProps {
    /** The name of the attachment. */
    name: string;
    /** The file URL string to download attachment. */
    downloadUrl: string;
    /** The size of attachment. */
    size?: string;
}
export declare const MessageAttachment: FC<MessageAttachmentProps>;
export default MessageAttachment;
