/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Block } from '../block.js';
import { Coordinate } from '../utils/coordinate.js';
import { BlockBase, BlockBaseJson } from './events_block_base.js';
import type { Workspace } from '../workspace.js';
/**
 * Class for a block move event.  Created before the move.
 *
 * @alias Blockly.Events.BlockMove
 */
export declare class BlockMove extends BlockBase {
    type: string;
    oldParentId?: string;
    oldInputName?: string;
    oldCoordinate?: Coordinate;
    newParentId?: string;
    newInputName?: string;
    newCoordinate?: Coordinate;
    /** @param opt_block The moved block.  Undefined for a blank event. */
    constructor(opt_block?: Block);
    /**
     * Encode the event as JSON.
     *
     * @returns JSON representation.
     */
    toJson(): BlockMoveJson;
    /**
     * Decode the JSON event.
     *
     * @param json JSON representation.
     */
    fromJson(json: BlockMoveJson): void;
    /**
     * Deserializes the JSON event.
     *
     * @param event The event to append new properties to. Should be a subclass
     *     of BlockMove, but we can't specify that due to the fact that parameters
     *     to static methods in subclasses must be supertypes of parameters to
     *     static methods in superclasses.
     * @internal
     */
    static fromJson(json: BlockMoveJson, workspace: Workspace, event?: any): BlockMove;
    /** Record the block's new location.  Called after the move. */
    recordNew(): void;
    /**
     * Returns the parentId and input if the block is connected,
     *   or the XY location if disconnected.
     *
     * @returns Collection of location info.
     */
    private currentLocation_;
    /**
     * Does this event record any change of state?
     *
     * @returns False if something changed.
     */
    isNull(): boolean;
    /**
     * Run a move event.
     *
     * @param forward True if run forward, false if run backward (undo).
     */
    run(forward: boolean): void;
}
export interface BlockMoveJson extends BlockBaseJson {
    oldParentId?: string;
    oldInputName?: string;
    oldCoordinate?: string;
    newParentId?: string;
    newInputName?: string;
    newCoordinate?: string;
    recordUndo?: boolean;
}
//# sourceMappingURL=events_block_move.d.ts.map