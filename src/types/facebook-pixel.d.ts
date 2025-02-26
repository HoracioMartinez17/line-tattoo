interface FacebookPixel {
  (event: "track" | "init", pixelId: string, data?: object): void;
  (event: "track", eventName: string, data?: object): void;
  callMethod?: (...args: any[]) => void;
  queue?: any[];
}

declare global {
  interface Window {
    fbq: FacebookPixel;
  }
  const fbq: FacebookPixel;
}

export {};
