/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import type { IProcedureModel } from '../interfaces/i_procedure_model.js';
import type { Workspace } from '../workspace.js';
import { ProcedureBase, ProcedureBaseJson } from './events_procedure_base.js';
/**
 * Represents a procedure data model being deleted.
 */
export declare class ProcedureDelete extends ProcedureBase {
    /** A string used to check the type of the event. */
    type: string;
    constructor(workspace: Workspace, model: IProcedureModel);
    run(forward: boolean): void;
    /**
     * Encode the event as JSON.
     *
     * @returns JSON representation.
     */
    toJson(): ProcedureDeleteJson;
    /**
     * Deserializes the JSON event.
     *
     * @internal
     */
    static fromJson(json: ProcedureDeleteJson, workspace: Workspace): ProcedureDelete;
}
export interface ProcedureDeleteJson extends ProcedureBaseJson {
}
//# sourceMappingURL=events_procedure_delete.d.ts.map