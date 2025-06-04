export interface BaseNotificationPayload {
    to: string;
    subject: string;
    message: string;
}

export type NotificationChannel = 'email' | 'push';