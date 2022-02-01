import { Lambda, ToAsyncFn } from '../../types/utility/utility';

export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
}

export function withDelay<TFn extends Lambda>(
  fn: TFn,
  delayMs: number,
): ToAsyncFn<TFn> {
  return async (...args) => {
    await wait(delayMs);
    return fn(...args);
  };
}
