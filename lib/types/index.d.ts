export declare type Direction = 'up' | 'right' | 'down' | 'left';
export declare type DeviceType = {
    deviceId: string;
    label: string;
};
export declare type SelectedDeviceId = string | null;
export declare type DeviceTypeContext = {
    devices: DeviceType[];
    selectedDevice: SelectedDeviceId;
};
export declare type DeviceConfig = {
    /** Whether to include additional devices (such as "Color bars" for video, "440Hz" for audio) in the available devices list */
    additionalDevices?: boolean;
};
export declare type LocalAudioOutputContextType = {
    isAudioOn: boolean;
    toggleAudio: () => void;
};
export declare type LocalVideoContextType = {
    tileId: null | number;
    isVideoEnabled: boolean;
    toggleVideo: () => Promise<void>;
};
export declare type ContentShareControlContextType = {
    paused: boolean;
    toggleContentShare: () => Promise<void>;
    togglePauseContentShare: () => void;
};
export declare enum MeetingStatus {
    Loading = 0,
    Succeeded = 1,
    Failed = 2,
    Ended = 3
}
export declare type RosterAttendeeType = {
    chimeAttendeeId: string;
    externalUserId?: string;
    name?: string;
};
export declare type RosterType = {
    [attendeeId: string]: RosterAttendeeType;
};
