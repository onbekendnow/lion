import { Constructor } from '@open-wc/dedupe-mixin';

export declare class UpdateStylesMixinHost {}

/**
 * # UpdateStylesMixin
 *
 * `SlotMixin`, when attached to the DOM it creates content for defined slots in the Light DOM.
 * The content element is created using a factory function and is assigned a slot name from the key.
 * Existing slot content is not overridden.
 *
 * The purpose is to have the default content in the Light DOM rather than hidden in Shadow DOM
 * like default slot content works natively.
 *
 * @example
 * get slots() {
 *   return {
 *     ...super.slots,
 *     // appends <div slot="foo"></div> to the Light DOM of this element
 *     foo: () => document.createElement('div'),
 *   };
 * }
 */
declare function UpdateStylesMixinImplementation<T extends Constructor<HTMLElement>>(
  superclass: T,
): T & Constructor<UpdateStylesMixinHost>;

export type UpdateStylesMixin = typeof UpdateStylesMixinImplementation;
