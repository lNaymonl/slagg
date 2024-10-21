export interface SettingModel {
    settingId: string;
    settingName: string;
    settingInputType: string;
    value: string;
    userId: number;
};

export enum settingInputType {
    text,
    dropdown,
    checkbox,
    radio,
    number,
    datetime,
};