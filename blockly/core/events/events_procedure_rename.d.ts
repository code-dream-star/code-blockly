/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import type { IProcedureModel } from '../interfaces/i_procedure_model.js';
import type { Workspace } from '../workspace.js';
import { ProcedureBase, ProcedureBaseJson } from './events_procedure_base.js';
/**
 * Represents a procedure being renamed.
 */
export declare class ProcedureRename extends ProcedureBase {
    readonly oldName: string;
    /** A string used to check the type of the event. */
    type: string;
    private newName;
    constructor(workspace: Workspace, model: IProcedureModel, oldName: string);
    run(forward: boolean): void;
    /**
     * Encode the event as JSON.
     *
     * @returns JSON representation.
     */
    toJson(): ProcedureRenameJson;
    /**
     * Deserializes the JSON event.
     *
     * @internal
     */
    static fromJson(json: ProcedureRenameJson, workspace: Workspace): ProcedureRename;
}
export interface ProcedureRenameJson extends ProcedureBaseJson {
    oldName: string;
}
//# sourceMappingURL=events_procedure_rename.d.ts.map