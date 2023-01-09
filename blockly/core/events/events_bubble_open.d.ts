/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import type { AbstractEventJson } from './events_abstract.js';
import type { BlockSvg } from '../block_svg.js';
import { UiBase } from './events_ui_base.js';
import type { Workspace } from '../workspace.js';
/**
 * Class for a bubble open event.
 *
 * @alias Blockly.Events.BubbleOpen
 */
export declare class BubbleOpen extends UiBase {
    blockId?: string;
    isOpen?: boolean;
    bubbleType?: BubbleType;
    type: string;
    /**
     * @param opt_block The associated block. Undefined for a blank event.
     * @param opt_isOpen Whether the bubble is opening (false if closing).
     *     Undefined for a blank event.
     * @param opt_bubbleType The type of bubble. One of 'mutator', 'comment' or
     *     'warning'. Undefined for a blank event.
     */
    constructor(opt_block?: BlockSvg, opt_isOpen?: boolean, opt_bubbleType?: BubbleType);
    /**
     * Encode the event as JSON.
     *
     * @returns JSON representation.
     */
    toJson(): BubbleOpenJson;
    /**
     * Decode the JSON event.
     *
     * @param json JSON representation.
     */
    fromJson(json: BubbleOpenJson): void;
    /**
     * Deserializes the JSON event.
     *
     * @param event The event to append new properties to. Should be a subclass
     *     of BubbleOpen, but we can't specify that due to the fact that
     *     parameters to static methods in subclasses must be supertypes of
     *     parameters to static methods in superclasses.
     * @internal
     */
    static fromJson(json: BubbleOpenJson, workspace: Workspace, event?: any): BubbleOpen;
}
export declare enum BubbleType {
    MUTATOR = "mutator",
    COMMENT = "comment",
    WARNING = "warning"
}
export interface BubbleOpenJson extends AbstractEventJson {
    isOpen: boolean;
    bubbleType: BubbleType;
    blockId: string;
}
//# sourceMappingURL=events_bubble_open.d.ts.map