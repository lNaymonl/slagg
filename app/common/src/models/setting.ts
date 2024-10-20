export interface SettingModel {
    settingId: string;
    value: string;
    settingInputType: SettingInputType;
    userId: number;
};

export enum SettingInputType {
    text,
    dropdown,
    checkbox,
    radio,
    number,
    datetime,
};