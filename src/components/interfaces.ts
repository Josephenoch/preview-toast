import { TIcon } from "./types";

export interface IIcons {
    success: TIcon,
    error: TIcon,
    info: TIcon,
    warn: TIcon
}

export interface IDetails {
    type: "success" | "error" | "warn" | "info",
    message: string,
    duration: number 

}
