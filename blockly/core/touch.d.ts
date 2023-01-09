/**
 * @license
 * Copyright 2016 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Gesture } from './gesture.js';
/**
 * A mock event, created from either a mouse or touch event,
 * with no more than one entry in the changedTouches array.
 */
interface PseudoEvent {
    type: string;
    changedTouches: Touch[];
    target: Element;
    stopPropagation: () => void;
    preventDefault: () => void;
}
/**
 * Whether touch is enabled in the browser.
 * Copied from Closure's goog.events.BrowserFeature.TOUCH_ENABLED
 */
export declare const TOUCH_ENABLED: boolean;
/**
 * The TOUCH_MAP lookup dictionary specifies additional touch events to fire,
 * in conjunction with mouse events.
 *
 * @alias Blockly.Touch.TOUCH_MAP
 */
export declare const TOUCH_MAP: {
    [key: string]: string[];
};
/**
 * Context menus on touch devices are activated using a long-press.
 * Unfortunately the contextmenu touch event is currently (2015) only supported
 * by Chrome.  This function is fired on any touchstart event, queues a task,
 * which after about a second opens the context menu.  The tasks is killed
 * if the touch event terminates early.
 *
 * @param e Touch start event.
 * @param gesture The gesture that triggered this longStart.
 * @alias Blockly.Touch.longStart
 * @internal
 */
export declare function longStart(e: PointerEvent, gesture: Gesture): void;
/**
 * Nope, that's not a long-press.  Either touchend or touchcancel was fired,
 * or a drag hath begun.  Kill the queued long-press task.
 *
 * @alias Blockly.Touch.longStop
 * @internal
 */
export declare function longStop(): void;
/**
 * Clear the touch identifier that tracks which touch stream to pay attention
 * to.  This ends the current drag/gesture and allows other pointers to be
 * captured.
 *
 * @alias Blockly.Touch.clearTouchIdentifier
 */
export declare function clearTouchIdentifier(): void;
/**
 * Decide whether Blockly should handle or ignore this event.
 * Mouse and touch events require special checks because we only want to deal
 * with one touch stream at a time.  All other events should always be handled.
 *
 * @param e The event to check.
 * @returns True if this event should be passed through to the registered
 *     handler; false if it should be blocked.
 * @alias Blockly.Touch.shouldHandleEvent
 */
export declare function shouldHandleEvent(e: Event): boolean;
/**
 * Get the pointer identifier from the given event.
 *
 * @param e Pointer event.
 * @returns The pointerId of the event.
 * @alias Blockly.Touch.getTouchIdentifierFromEvent
 */
export declare function getTouchIdentifierFromEvent(e: PointerEvent): string;
/**
 * Check whether the pointer identifier on the event matches the current saved
 * identifier. If the current identifier was unset, save the identifier from
 * the event. This starts a drag/gesture, during which pointer events with
 * other identifiers will be silently ignored.
 *
 * @param e Pointer event.
 * @returns Whether the identifier on the event matches the current saved
 *     identifier.
 * @alias Blockly.Touch.checkTouchIdentifier
 */
export declare function checkTouchIdentifier(e: PointerEvent): boolean;
/**
 * Set an event's clientX and clientY from its first changed touch.  Use this to
 * make a touch event work in a mouse event handler.
 *
 * @param e A touch event.
 * @alias Blockly.Touch.setClientFromTouch
 */
export declare function setClientFromTouch(e: Event | PseudoEvent): void;
/**
 * Check whether a given event is a mouse, touch, or pointer event.
 *
 * @param e An event.
 * @returns True if it is a mouse, touch, or pointer event; false otherwise.
 * @alias Blockly.Touch.isMouseOrTouchEvent
 */
export declare function isMouseOrTouchEvent(e: Event | PseudoEvent): boolean;
/**
 * Check whether a given event is a touch event or a pointer event.
 *
 * @param e An event.
 * @returns True if it is a touch or pointer event; false otherwise.
 * @alias Blockly.Touch.isTouchEvent
 */
export declare function isTouchEvent(e: Event | PseudoEvent): boolean;
/**
 * Split an event into an array of events, one per changed touch or mouse
 * point.
 *
 * @param e A mouse event or a touch event with one or more changed touches.
 * @returns An array of events or pseudo events.
 *     Each pseudo-touch event will have exactly one changed touch and there
 * will be no real touch events.
 * @alias Blockly.Touch.splitEventByTouches
 */
export declare function splitEventByTouches(e: Event): Array<Event | PseudoEvent>;
export {};
//# sourceMappingURL=touch.d.ts.map