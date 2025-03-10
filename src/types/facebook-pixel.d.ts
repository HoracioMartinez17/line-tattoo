interface FacebookPixel {
  // Definición específica para init
  (event: "init", pixelId: string, data?: object): void;

  // Definiciones para track eventos estándar
  (event: "track", eventName: string, data?: object): void;

  // Definiciones específicas para trackCustom
  (event: "trackCustom", eventName: string, data?: object): void;

  // Otros métodos y propiedades
  callMethod?: (...args: any[]) => void;
  queue?: any[];
  version?: string;
}

declare global {
  interface Window {
    fbq: FacebookPixel;
    _fbq?: any; // Para compatibilidad con implementaciones antiguas
  }
}

export {};
