export function DummyApi<T>(data: T, timeout = 1000) {
  return new Promise<T>(function(resolve: (arg0: T) => any) {
    window.setTimeout(()=>resolve(data), timeout);
  });
}

export default {
  DummyApi
}
