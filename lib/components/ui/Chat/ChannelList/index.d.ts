import { FC, HTMLAttributes } from 'react';
import { BaseProps } from '../../Base';
export interface ChannelListProps extends Omit<HTMLAttributes<HTMLUListElement & HTMLLIElement>, 'css'>, BaseProps {
}
export declare const ChannelList: FC<ChannelListProps>;
export default ChannelList;
