/// <reference types="react" />
export declare const ModalContext: import("react").Context<{
    onClose(): void;
    labelID: string;
}>;
export declare const useModalContext: () => {
    onClose(): void;
    labelID: string;
};
export default ModalContext;
