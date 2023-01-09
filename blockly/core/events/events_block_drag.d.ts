/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Block } from '../block.js';
import { AbstractEventJson } from './events_abstract.js';
import { UiBase } from './events_ui_base.js';
import { Workspace } from '../workspace.js';
/**
 * Class for a block drag event.
 *
 * @alias Blockly.Events.BlockDrag
 */
export declare class BlockDrag extends UiBase {
    blockId?: string;
    isStart?: boolean;
    blocks?: Block[];
    type: string;
    /**
     * @param opt_block The top block in the stack that is being dragged.
     *     Undefined for a blank event.
     * @param opt_isStart Whether this is the start of a block drag.
     *    Undefined for a blank event.
     * @param opt_blocks The blocks affected by this drag. Undefined for a blank
     *     event.
     */
    constructor(opt_block?: Block, opt_isStart?: boolean, opt_blocks?: Block[]);
    /**
     * Encode the event as JSON.
     *
     * @returns JSON representation.
     */
    toJson(): BlockDragJson;
    /**
     * Decode the JSON event.
     *
     * @param json JSON representation.
     */
    fromJson(json: BlockDragJson): void;
    /**
     * Deserializes the JSON event.
     *
     * @param event The event to append new properties to. Should be a subclass
     *     of BlockDrag, but we can't specify that due to the fact that parameters
     *     to static methods in subclasses must be supertypes of parameters to
     *     static methods in superclasses..
     * @internal
     */
    static fromJson(json: BlockDragJson, workspace: Workspace, event?: any): BlockDrag;
}
export interface BlockDragJson extends AbstractEventJson {
    isStart: boolean;
    blockId: string;
    blocks?: Block[];
}
//# sourceMappingURL=events_block_drag.d.ts.map