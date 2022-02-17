export { worker } from './browser';
// Don't export handlers through index. Crashes tests as it runs setUpWorker
