import { LogLevel } from 'amazon-chime-sdk-js';
export declare enum DevicePermissionStatus {
    UNSET = "UNSET",
    IN_PROGRESS = "IN_PROGRESS",
    GRANTED = "GRANTED",
    DENIED = "DENIED"
}
export interface MeetingJoinData {
    meetingInfo: any;
    attendeeInfo: any;
}
export interface AttendeeResponse {
    name?: string;
}
export declare type FullDeviceInfoType = {
    selectedAudioOutputDevice: string | null;
    selectedAudioInputDevice: string | null;
    selectedVideoInputDevice: string | null;
    audioInputDevices: MediaDeviceInfo[] | null;
    audioOutputDevices: MediaDeviceInfo[] | null;
    videoInputDevices: MediaDeviceInfo[] | null;
};
export interface PostLogConfig {
    name: string;
    batchSize: number;
    intervalMs: number;
    url: string;
    logLevel: LogLevel;
}
export interface ManagerConfig {
    logLevel: LogLevel;
    postLogConfig?: PostLogConfig;
    simulcastEnabled?: boolean;
    spectator?: boolean;
}
