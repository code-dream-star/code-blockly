/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Block } from '../block.js';
import * as blocks from '../serialization/blocks.js';
import { BlockBase, BlockBaseJson } from './events_block_base.js';
import { Workspace } from '../workspace.js';
/**
 * Class for a block creation event.
 *
 * @alias Blockly.Events.BlockCreate
 */
export declare class BlockCreate extends BlockBase {
    type: string;
    xml?: Element | DocumentFragment;
    ids?: string[];
    json?: blocks.State;
    /** @param opt_block The created block.  Undefined for a blank event. */
    constructor(opt_block?: Block);
    /**
     * Encode the event as JSON.
     *
     * @returns JSON representation.
     */
    toJson(): BlockCreateJson;
    /**
     * Decode the JSON event.
     *
     * @param json JSON representation.
     */
    fromJson(json: BlockCreateJson): void;
    /**
     * Deserializes the JSON event.
     *
     * @param event The event to append new properties to. Should be a subclass
     *     of BlockCreate, but we can't specify that due to the fact that
     *     parameters to static methods in subclasses must be supertypes of
     *     parameters to static methods in superclasses.
     * @internal
     */
    static fromJson(json: BlockCreateJson, workspace: Workspace, event?: any): BlockCreate;
    /**
     * Run a creation event.
     *
     * @param forward True if run forward, false if run backward (undo).
     */
    run(forward: boolean): void;
}
export interface BlockCreateJson extends BlockBaseJson {
    xml: string;
    ids: string[];
    json: object;
    recordUndo?: boolean;
}
//# sourceMappingURL=events_block_create.d.ts.map