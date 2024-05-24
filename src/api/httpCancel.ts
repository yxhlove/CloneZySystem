export const abortControllers: Map<symbol, AbortController> = new Map();

export const cancelRequest = (cancelRequestToken: symbol) => {
  if (abortControllers.has(cancelRequestToken)) {
    abortControllers.get(cancelRequestToken)?.abort();
    abortControllers.delete(cancelRequestToken);
  }
};

export const cancelAllRequest = () => {
  for (const controller of abortControllers.values()) {
    controller.abort();
  }
  abortControllers.clear();
};
