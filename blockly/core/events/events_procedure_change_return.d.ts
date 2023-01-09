/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import type { IProcedureModel } from '../interfaces/i_procedure_model.js';
import type { Workspace } from '../workspace.js';
import { ProcedureBase, ProcedureBaseJson } from './events_procedure_base.js';
/**
 * Represents a procedure's return type/status changing.
 */
export declare class ProcedureChangeReturn extends ProcedureBase {
    readonly oldTypes: string[] | null;
    /** A string used to check the type of the event. */
    type: string;
    /** The new type(s) the procedure's return has been set to. */
    private newTypes;
    /**
     * @param oldTypes The type(s) the procedure's return was set to before it
     *     changed.
     */
    constructor(workpace: Workspace, model: IProcedureModel, oldTypes: string[] | null);
    run(forward: boolean): void;
    /**
     * Encode the event as JSON.
     *
     * @returns JSON representation.
     */
    toJson(): ProcedureChangeReturnJson;
    /**
     * Deserializes the JSON event.
     *
     * @internal
     */
    static fromJson(json: ProcedureChangeReturnJson, workspace: Workspace): ProcedureChangeReturn;
}
export interface ProcedureChangeReturnJson extends ProcedureBaseJson {
    oldTypes: string[] | null;
}
//# sourceMappingURL=events_procedure_change_return.d.ts.map