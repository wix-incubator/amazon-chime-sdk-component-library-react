import { AudioVideoFacade, ConsoleLogger, DefaultMeetingSession, LogLevel, MeetingSessionConfiguration, MeetingSessionStatus, AudioVideoObserver, MultiLogger } from 'amazon-chime-sdk-js';
import { MeetingStatus } from '../../types';
import { DevicePermissionStatus, MeetingJoinData, AttendeeResponse, FullDeviceInfoType, PostLogConfig, ManagerConfig } from './types';
export declare class MeetingManager implements AudioVideoObserver {
    meetingSession: DefaultMeetingSession | null;
    meetingStatus: MeetingStatus;
    meetingStatusObservers: ((meetingStatus: MeetingStatus) => void)[];
    audioVideo: AudioVideoFacade | null;
    audioVideoObservers: AudioVideoObserver;
    configuration: MeetingSessionConfiguration | null;
    meetingId: string | null;
    meetingRegion: string | null;
    getAttendee?: (chimeAttendeeId: string, externalUserId?: string) => Promise<AttendeeResponse>;
    selectedAudioOutputDevice: string | null;
    selectedAudioOutputDeviceObservers: ((deviceId: string | null) => void)[];
    selectedAudioInputDevice: string | null;
    selectedAudioInputDeviceObservers: ((deviceId: string | null) => void)[];
    selectedVideoInputDevice: string | null;
    selectedVideoInputDeviceObservers: ((deviceId: string | null) => void)[];
    audioInputDevices: MediaDeviceInfo[] | null;
    audioOutputDevices: MediaDeviceInfo[] | null;
    videoInputDevices: MediaDeviceInfo[] | null;
    devicePermissionStatus: DevicePermissionStatus;
    devicePermissionsObservers: ((permission: string) => void)[];
    activeSpeakerListener: ((activeSpeakers: string[]) => void) | null;
    activeSpeakerCallbacks: ((activeSpeakers: string[]) => void)[];
    activeSpeakers: string[];
    audioVideoCallbacks: ((audioVideo: AudioVideoFacade | null) => void)[];
    devicesUpdatedCallbacks: ((fullDeviceInfo: FullDeviceInfoType) => void)[];
    logLevel: LogLevel;
    postLoggerConfig: PostLogConfig | null;
    simulcastEnabled: boolean;
    spectator: boolean;
    constructor(config: ManagerConfig);
    initializeMeetingManager(): void;
    join({ meetingInfo, attendeeInfo }: MeetingJoinData): Promise<void>;
    start(): Promise<void>;
    leave(): Promise<void>;
    initializeMeetingSession(configuration: MeetingSessionConfiguration): Promise<any>;
    createLogger(configuration: MeetingSessionConfiguration): ConsoleLogger | MultiLogger;
    audioVideoDidStart: () => void;
    audioVideoDidStop: (sessionStatus: MeetingSessionStatus) => void;
    setupAudioVideoObservers(): void;
    updateDeviceLists(): Promise<void>;
    setupDeviceLabelTrigger(): void;
    setupActiveSpeakerDetection(): void;
    listAndSelectDevices(): Promise<void>;
    selectAudioInputDevice: (deviceId: string) => Promise<void>;
    selectAudioOutputDevice: (deviceId: string) => Promise<void>;
    selectVideoInputDevice: (deviceId: string) => Promise<void>;
    /**
     * ====================================================================
     * Subscriptions
     * ====================================================================
     */
    subscribeToAudioVideo: (callback: (av: AudioVideoFacade | null) => void) => void;
    unsubscribeFromAudioVideo: (callbackToRemove: (av: AudioVideoFacade | null) => void) => void;
    publishAudioVideo: () => void;
    subscribeToActiveSpeaker: (callback: (activeSpeakers: string[]) => void) => void;
    unsubscribeFromActiveSpeaker: (callbackToRemove: (activeSpeakers: string[]) => void) => void;
    publishActiveSpeaker: () => void;
    subscribeToDevicePermissionStatus: (callback: (permission: string) => void) => void;
    unsubscribeFromDevicePermissionStatus: (callbackToRemove: (permission: string) => void) => void;
    private publishDevicePermissionStatus;
    subscribeToSelectedVideoInputDevice: (callback: (deviceId: string | null) => void) => void;
    unsubscribeFromSelectedVideoInputDevice: (callbackToRemove: (deviceId: string | null) => void) => void;
    private publishSelectedVideoInputDevice;
    subscribeToSelectedAudioInputDevice: (callback: (deviceId: string | null) => void) => void;
    unsubscribeFromSelectedAudioInputDevice: (callbackToRemove: (deviceId: string | null) => void) => void;
    private publishSelectedAudioInputDevice;
    subscribeToSelectedAudioOutputDevice: (callback: (deviceId: string | null) => void) => void;
    unsubscribeFromSelectedAudioOutputDevice: (callbackToRemove: (deviceId: string | null) => void) => void;
    private publishSelectedAudioOutputDevice;
    subscribeToMeetingStatus: (callback: (meetingStatus: MeetingStatus) => void) => void;
    unsubscribeFromMeetingStatus: (callbackToRemove: (meetingStatus: MeetingStatus) => void) => void;
    private publishMeetingStatus;
}
export default MeetingManager;
