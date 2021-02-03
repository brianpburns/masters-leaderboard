export interface $Action<T, P = undefined> {
  payload: P;
  type: T;
}

/**
 * This function overload allows createAction to generate actions both with and without payloads
 */
export function createAction<T extends string>(actionType: T): $Action<T>;
export function createAction<T extends string, P>(actionType: T, payload: P): $Action<T, P>;
export function createAction<T extends string, P>(actionType: T, payload?: P) {
  return payload === undefined ? { type: actionType } : { type: actionType, payload };
}

/**
 * The following methods are largely taken from https://github.com/Hotell/rex-tils
 */
interface StringMap<T> {
  [key: string]: T;
}

type AnyFunction = (...args: any[]) => any;

export type ActionsUnion<A extends StringMap<AnyFunction>> = ReturnType<A[keyof A]>;

