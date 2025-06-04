import { BaseNotificationPayload } from "../interfaces/notification.interface";

export abstract class NotificationStrategy {
  abstract send(payload: BaseNotificationPayload): Promise<void>;
}
