import { dedupeMixin } from '@open-wc/dedupe-mixin';

/**
 * @typedef {import('../types/DisabledMixinTypes').DisabledMixin} DisabledMixin
 */

/** @type {DisabledMixin} */
const DisabledMixinImplementation = superclass =>
  // eslint-disable-next-line no-shadow
  class DisabledMixinHost extends superclass {
    static get properties() {
      return {
        disabled: {
          type: Boolean,
          reflect: true,
        },
      };
    }

    constructor() {
      super();
      this.__requestedToBeDisabled = false;
      this.__isUserSettingDisabled = true;
      this.__restoreDisabledTo = false;
      this.disabled = false;
    }

    makeRequestToBeDisabled() {
      if (this.__requestedToBeDisabled === false) {
        this.__requestedToBeDisabled = true;
        this.__restoreDisabledTo = this.disabled;
        this.__internalSetDisabled(true);
      }
    }

    retractRequestToBeDisabled() {
      if (this.__requestedToBeDisabled === true) {
        this.__requestedToBeDisabled = false;
        this.__internalSetDisabled(this.__restoreDisabledTo);
      }
    }

    /** @param {boolean} value */
    __internalSetDisabled(value) {
      this.__isUserSettingDisabled = false;
      this.disabled = value;
      this.__isUserSettingDisabled = true;
    }

    /**
     * @param {PropertyKey} name
     * @param {?} oldValue
     */
    _requestUpdate(name, oldValue) {
      super._requestUpdate(name, oldValue);
      if (name === 'disabled') {
        if (this.__isUserSettingDisabled) {
          this.__restoreDisabledTo = this.disabled;
        }
        if (this.disabled === false && this.__requestedToBeDisabled === true) {
          this.__internalSetDisabled(true);
        }
      }
    }
  };

// FIXME: Wait for https://github.com/open-wc/open-wc/pull/1741 so we can get this type issue fixed
// @ts-ignore
export const DisabledMixin = dedupeMixin(DisabledMixinImplementation);
