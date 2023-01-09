/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import type { IProcedureModel } from '../interfaces/i_procedure_model.js';
import { State as ProcedureState } from '../serialization/procedures.js';
import type { Workspace } from '../workspace.js';
import { ProcedureBase, ProcedureBaseJson } from './events_procedure_base.js';
/**
 * Represents a procedure data model being created.
 */
export declare class ProcedureCreate extends ProcedureBase {
    /** A string used to check the type of the event. */
    type: string;
    constructor(workspace: Workspace, model: IProcedureModel);
    run(forward: boolean): void;
    /**
     * Encode the event as JSON.
     *
     * @returns JSON representation.
     */
    toJson(): ProcedureCreateJson;
    /**
     * Deserializes the JSON event.
     *
     * @internal
     */
    static fromJson(json: ProcedureCreateJson, workspace: Workspace): ProcedureCreate;
}
export interface ProcedureCreateJson extends ProcedureBaseJson {
    model: ProcedureState;
}
//# sourceMappingURL=events_procedure_create.d.ts.map