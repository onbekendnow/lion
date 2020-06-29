export class LionTabs extends LitElement {
    static get properties(): {
        selectedIndex: {
            type: NumberConstructor;
            attribute: string;
            reflect: boolean;
        };
    };
    static get styles(): import("lit-element").CSSResult[];
    /**
     * @param {number} value The new index
     */
    set selectedIndex(arg: number);
    /**
     * @return {number}
     */
    get selectedIndex(): number;
    __setupSlots(): void;
    __setupStore(): void;
    /** @type {StoreEntry[]} */
    __store: StoreEntry[] | undefined;
    __cleanStore(): void;
    /**
     * @param {number} index
     * @returns {EventHandlerNonNull}
     */
    __createButtonClickHandler(index: number): EventHandlerNonNull;
    /**
     * @param {Event} ev
     */
    __handleButtonKeyup(ev: Event): void;
    __selectedIndex: number | undefined;
    /**
     * @param {number} value The new index for focus
     */
    _setSelectedIndexWithFocus(value: number): void;
    get _pairCount(): number;
    __updateSelected(withFocus?: boolean): void;
}
export type StoreEntry = {
    /**
     * Dom Element
     */
    el: HTMLElement;
    /**
     * Unique ID for the entry
     */
    uid?: string;
    /**
     * Unique ID for the entry
     */
    button?: HTMLElement;
    /**
     * Unique ID for the entry
     */
    panel?: HTMLElement;
    clickHandler: EventHandlerNonNull;
    keydownHandler: EventHandlerNonNull;
    keyupHandler: EventHandlerNonNull;
};
import { LitElement } from "@lion/core";
