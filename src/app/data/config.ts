import { EDITABLE_CONTENT } from './editable-content';

export interface SiteConfig {
  sisterName: string;
  nickname: string;
  myCallName: string;
  secretPassword: string;
  allowedPasswords: string[];
}

export const SITE_CONFIG: SiteConfig = {
  sisterName: EDITABLE_CONTENT.profile.sisterName,
  nickname: EDITABLE_CONTENT.profile.nickname,
  myCallName: EDITABLE_CONTENT.profile.myCallName,
  secretPassword: EDITABLE_CONTENT.secretRoom.allowedPasswords[0] || 'likki',
  allowedPasswords: EDITABLE_CONTENT.secretRoom.allowedPasswords
};
