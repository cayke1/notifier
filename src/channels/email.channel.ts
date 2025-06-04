import { Resend } from "resend";
import { BaseNotificationPayload } from "../interfaces/notification.interface";
import { NotificationStrategy } from "../strategies/base.strategy";

export class EmailChannel extends NotificationStrategy {
  private resend = new Resend(process.env.RESEND_API_KEY || "");
  private from = process.env.EMAIL_FROM || "Acme <onboarding@resend.dev>";
  async send(payload: BaseNotificationPayload): Promise<void> {
    const { data, error } = await this.resend.emails.send({
      from: this.from,
      to: payload.to,
      subject: payload.subject,
      html: payload.message,
    });

    if (error) {
      throw new Error(`Failed to send email: ${error.message}`);
    }

    return;
  }
}
