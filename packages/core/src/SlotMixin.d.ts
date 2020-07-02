export type SlotMixin = typeof import("../types/SlotMixinTypes").SlotMixinImplementation;
export const SlotMixin: (s: import("@open-wc/dedupe-mixin").Constructor<{}>) => any;
export type SlotsMap = {
    [key: string]: typeof import("../types/SlotMixinTypes").slotFunction;
};
