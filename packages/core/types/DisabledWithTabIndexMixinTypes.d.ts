import { Constructor } from '@open-wc/dedupe-mixin';

export declare class DisabledWithTabIndexMixinHost {
  /**
   * Makes request to make the element disabled and set the tabindex
   */
  public makeRequestToBeDisabled(): void;

  /**
   * Retract request to make the element disabled and restore disabled and tabindex to previous
   */
  public retractRequestToBeDisabled(): void;

  private __internalSetDisabled(value: boolean): void;
}

export declare function DisabledWithTabIndexMixinImplementation<T extends Constructor<HTMLElement>>(
  superclass: T,
): T & DisabledWithTabIndexMixinHost;

export type DisabledWithTabIndexMixin = typeof DisabledWithTabIndexMixinImplementation;
