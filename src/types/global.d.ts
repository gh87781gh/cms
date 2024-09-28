declare module 'ssr-window' {
  export function getWindow(): Window & typeof globalThis;
}