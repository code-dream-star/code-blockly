/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import type { IParameterModel } from '../interfaces/i_parameter_model.js';
import type { IProcedureModel } from '../interfaces/i_procedure_model.js';
import { ParameterState } from '../serialization/procedures.js';
import type { Workspace } from '../workspace.js';
import { ProcedureParameterBase, ProcedureParameterBaseJson } from './events_procedure_parameter_base.js';
/**
 * Represents a parameter being added to a procedure.
 */
export declare class ProcedureParameterCreate extends ProcedureParameterBase {
    readonly index: number;
    /** A string used to check the type of the event. */
    type: string;
    /**
     * @param parameter The parameter model that was just added to the procedure.
     * @param index The index the parameter was inserted at.
     */
    constructor(workspace: Workspace, procedure: IProcedureModel, parameter: IParameterModel, index: number);
    run(forward: boolean): void;
    parameterMatches(param: IParameterModel): boolean;
    /**
     * Encode the event as JSON.
     *
     * @returns JSON representation.
     */
    toJson(): ProcedureParameterCreateJson;
    /**
     * Deserializes the JSON event.
     *
     * @internal
     */
    static fromJson(json: ProcedureParameterCreateJson, workspace: Workspace): ProcedureParameterCreate;
}
export interface ProcedureParameterCreateJson extends ProcedureParameterBaseJson {
    parameter: ParameterState;
    index: number;
}
//# sourceMappingURL=events_procedure_parameter_create.d.ts.map