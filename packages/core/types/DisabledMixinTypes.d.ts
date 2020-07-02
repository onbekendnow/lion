import { Constructor } from '@open-wc/dedupe-mixin';

export declare class DisabledMixinHost {
  /**
   * Makes request to make the element disabled
   */
  public makeRequestToBeDisabled(): void;

  /**
   * Retract request to make the element disabled and restore disabled to previous
   */
  public retractRequestToBeDisabled(): void;

  private __internalSetDisabled(value: boolean): void;
}

export declare function DisabledMixinImplementation<T extends Constructor<HTMLElement>>(
  superclass: T,
): T & DisabledMixinHost;

export type DisabledMixin = typeof DisabledMixinImplementation;
