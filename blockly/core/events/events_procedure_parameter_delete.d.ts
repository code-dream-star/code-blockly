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
 * Represents a parameter being removed from a procedure.
 */
export declare class ProcedureParameterDelete extends ProcedureParameterBase {
    readonly index: number;
    /** A string used to check the type of the event. */
    type: string;
    /**
     * @param parameter The parameter model that was just removed from the
     *     procedure.
     * @param index The index the parameter was at before it was removed.
     */
    constructor(workspace: Workspace, procedure: IProcedureModel, parameter: IParameterModel, index: number);
    run(forward: boolean): void;
    parameterMatches(param: IParameterModel): boolean;
    /**
     * Encode the event as JSON.
     *
     * @returns JSON representation.
     */
    toJson(): ProcedureParameterDeleteJson;
    /**
     * Deserializes the JSON event.
     *
     * @internal
     */
    static fromJson(json: ProcedureParameterDeleteJson, workspace: Workspace): ProcedureParameterDelete;
}
export interface ProcedureParameterDeleteJson extends ProcedureParameterBaseJson {
    index: number;
}
//# sourceMappingURL=events_procedure_parameter_delete.d.ts.map