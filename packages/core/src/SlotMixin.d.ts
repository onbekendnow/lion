export type SlotMixin = typeof import("../types/SlotMixinTypes").SlotMixinImplementation;
export const SlotMixin: SlotMixin;
export type SlotsMap = {
    [key: string]: typeof import("../types/SlotMixinTypes").slotFunction;
};
export type LitElement = import("lit-element").LitElement;
