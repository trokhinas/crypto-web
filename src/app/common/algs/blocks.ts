export interface BlocksResponse {
    blocks: [ControlPanelBlock];
    withKeysGeneration: boolean;
    withStart: boolean;
    withEncrypt: boolean;
}

export interface ControlPanelBlock {
    id: string;
    value: string;
    name: string;
}