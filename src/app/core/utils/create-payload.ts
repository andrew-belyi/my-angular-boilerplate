// @ts-ignore
export const createPayload = <T>(defaultPayload?: T) => (payload: T = defaultPayload) => ({ payload });
