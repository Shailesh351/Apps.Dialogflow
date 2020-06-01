import { ISetting, SettingType} from '@rocket.chat/apps-engine/definition/settings';
import { createSign } from 'crypto';

export const AppSettings: Array<ISetting> = [
    {
        id: 'Lc-Bot-Username',
        public: true,
        type: SettingType.STRING,
        packageValue: '',
        i18nLabel: 'Livechat Bot Username',
        required: true,
    },
    {
        id: 'Dialogflow-Project-Id',
        public: true,
        type: SettingType.STRING,
        packageValue: '',
        i18nLabel: 'Dialogflow Project Id',
        required: true,
    },
    {
        id: 'Dialogflow-Private-Key-Id',
        public: true,
        type: SettingType.STRING,
        packageValue: '',
        i18nLabel: 'Dialogflow Private Key Id',
        required: true,
    },
    {
        id: 'Dialogflow-Client-Email',
        public: true,
        type: SettingType.STRING,
        packageValue: '',
        i18nLabel: 'Dialogflow Client Email',
        required: true,
    },
    {
        id: 'Dialogflow-Client-Id',
        public: true,
        type: SettingType.STRING,
        packageValue: '',
        i18nLabel: 'Dialogflow Client Id',
        required: true,
    },
    {
        id: 'Dialogflow-Private-Key',
        public: true,
        type: SettingType.STRING,
        packageValue: '',
        i18nLabel: 'Dialogflow Private Key',
        required: true,
    },
];
