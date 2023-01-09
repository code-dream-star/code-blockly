/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { AbstractEventJson } from './events_abstract.js';
import { UiBase } from './events_ui_base.js';
import type { Workspace } from '../workspace.js';
/**
 * Class for a trashcan open event.
 *
 * @alias Blockly.Events.TrashcanOpen
 */
export declare class TrashcanOpen extends UiBase {
    isOpen?: boolean;
    type: string;
    /**
     * @param opt_isOpen Whether the trashcan flyout is opening (false if
     *     opening). Undefined for a blank event.
     * @param opt_workspaceId The workspace identifier for this event.
     *    Undefined for a blank event.
     */
    constructor(opt_isOpen?: boolean, opt_workspaceId?: string);
    /**
     * Encode the event as JSON.
     *
     * @returns JSON representation.
     */
    toJson(): TrashcanOpenJson;
    /**
     * Decode the JSON event.
     *
     * @param json JSON representation.
     */
    fromJson(json: TrashcanOpenJson): void;
    /**
     * Deserializes the JSON event.
     *
     * @param event The event to append new properties to. Should be a subclass
     *     of TrashcanOpen, but we can't specify that due to the fact that
     *     parameters to static methods in subclasses must be supertypes of
     *     parameters to static methods in superclasses.
     * @internal
     */
    static fromJson(json: TrashcanOpenJson, workspace: Workspace, event?: any): TrashcanOpen;
}
export interface TrashcanOpenJson extends AbstractEventJson {
    isOpen: boolean;
}
//# sourceMappingURL=events_trashcan_open.d.ts.map