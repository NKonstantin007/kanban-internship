// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Lambda<TRes = any, TArgs extends any[] = any[]> = (
  ...args: TArgs
) => TRes;
export type ToAsyncFn<TFn extends Lambda> = (
  ...args: Parameters<TFn>
) => Promise<ReturnType<TFn>>;
