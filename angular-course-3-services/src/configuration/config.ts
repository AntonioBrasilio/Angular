import { InjectionToken } from "@angular/core";

export interface AppConfig {
    apiEndpoint: string;
    cacheSize: number;
}

export const APP_CONFIG: AppConfig = {
    apiEndpoint: "http://localhost:9000",
    cacheSize: 10
}

export const CONFIG_TOKEN = new InjectionToken<AppConfig>("CONFIG_TOKEN");
