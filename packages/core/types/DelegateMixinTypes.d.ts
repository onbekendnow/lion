import { Constructor } from '@open-wc/dedupe-mixin';

export declare class DelegateMixinHost {}

/**
 * # DelegateMixin
 */
declare function DelegateMixinImplementation<T extends Constructor<HTMLElement>>(
  superclass: T,
): T & Constructor<DelegateMixinHost>;

export type DelegateMixin = typeof DelegateMixinImplementation;
