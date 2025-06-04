import { Injectable } from "@nestjs/common";
import {
  BaseNotificationPayload,
  NotificationChannel,
} from "./interfaces/notification.interface";
import { EmailChannel } from "./channels/email.channel";

@Injectable()
export class NotifierService {
  private channels: Record<NotificationChannel, any>;

  constructor() {
    this.channels = {
      email: new EmailChannel(),
      push: null, // Initialize with actual channel implementation
    };
  }

  async notify(channel: NotificationChannel, payload: BaseNotificationPayload) {
    const strategy = this.channels[channel];
    if (!strategy)
      throw new Error(`Notification channel ${channel} is not supported`);
    return strategy.send(payload);
  }
}
