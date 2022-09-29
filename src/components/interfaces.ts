import { TIcon } from "./types";

export interface IIcons {
    success: TIcon,
    error: TIcon,
    info: TIcon,
    warn: TIcon
}

export interface IAlertProps {
    type: "success" | "error" | "warn" | "info",
    message: string,
  }

export interface IDetails extends IAlertProps{
    duration: number 
}