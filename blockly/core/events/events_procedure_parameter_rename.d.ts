/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import type { IParameterModel } from '../interfaces/i_parameter_model.js';
import type { IProcedureModel } from '../interfaces/i_procedure_model.js';
import type { Workspace } from '../workspace.js';
import { ProcedureParameterBase, ProcedureParameterBaseJson } from './events_procedure_parameter_base.js';
/**
 * Represents a parameter of a procedure being renamed.
 */
export declare class ProcedureParameterRename extends ProcedureParameterBase {
    readonly oldName: string;
    /** A string used to check the type of the event. */
    type: string;
    private readonly newName;
    constructor(workspace: Workspace, procedure: IProcedureModel, parameter: IParameterModel, oldName: string);
    run(forward: boolean): void;
    /**
     * Encode the event as JSON.
     *
     * @returns JSON representation.
     */
    toJson(): ProcedureParameterRenameJson;
    /**
     * Deserializes the JSON event.
     *
     * @internal
     */
    static fromJson(json: ProcedureParameterRenameJson, workspace: Workspace): ProcedureParameterRename;
}
export interface ProcedureParameterRenameJson extends ProcedureParameterBaseJson {
    oldName: string;
}
//# sourceMappingURL=events_procedure_parameter_rename.d.ts.map