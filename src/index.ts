/* Creates a pluralized type of the given generic type */
export type pluralOf<T> = T[];

/* Most common pluralized types */
export type anys = pluralOf<any>;
export type booleans = pluralOf<boolean>;
export type strings = pluralOf<string>;
export type numbers = pluralOf<number>;
export type objects = pluralOf<object>;
export type functions = pluralOf<(...args: any[]) => any>;
export type arrays = pluralOf<any[]>;
