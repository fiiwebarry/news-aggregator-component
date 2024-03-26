export const SELECTED_SOURCES = {
  guardian: "guardian",
  newsHub: "newsHub",
  newYorkTimes: "newYorkTimes",
};

export const FETCH_STATUS = {
  idle: "idle",
  loading: "loading",
  error: "error",
  success: "success",
};

export const removeUnusedParams = (params) => {
  const result = {};
  for (const [key, value] of Object.entries(params)) {
    if (value) {
      result[key] = value;
    }
  }
  return result;
};
