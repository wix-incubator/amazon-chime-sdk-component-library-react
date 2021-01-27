import React from 'react';
import MeetingManager from './MeetingManager';
import { PostLogConfig } from './types';
import { LogLevel } from 'amazon-chime-sdk-js';
interface Props {
    /** Determines how verbose the logging statements will be */
    logLevel?: LogLevel;
    /** Configuration for a MeetingSessionPOSTLogger */
    postLogConfig?: PostLogConfig;
    /** Whether or not to enable simulcast for the meeting session */
    simulcastEnabled?: boolean;
    spectator?: boolean;
}
export declare const MeetingContext: React.Context<MeetingManager | null>;
export declare const MeetingProvider: React.FC<Props>;
export declare const useMeetingManager: () => MeetingManager;
export {};
