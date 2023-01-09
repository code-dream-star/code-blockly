/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import type { IParameterModel } from '../interfaces/i_parameter_model.js';
import type { IProcedureModel } from '../interfaces/i_procedure_model';
import type { VariableModel } from '../variable_model.js';
import type { Workspace } from '../workspace.js';
export declare class ObservableParameterModel implements IParameterModel {
    private readonly workspace;
    private id;
    private variable;
    private shouldFireEvents;
    private procedureModel;
    constructor(workspace: Workspace, name: string, id?: string);
    /**
     * Sets the name of this parameter to the given name.
     */
    setName(name: string): this;
    /**
     * Unimplemented. The built-in ParameterModel does not support typing.
     * If you want your procedure blocks to have typed parameters, you need to
     * implement your own ParameterModel.
     *
     * @throws Throws for the ObservableParameterModel specifically because this
     *     method is unimplemented.
     */
    setTypes(_types: string[]): this;
    /**
     * Returns the name of this parameter.
     */
    getName(): string;
    /**
     * Returns the types of this parameter.
     */
    getTypes(): string[];
    /**
     * Returns the unique language-neutral ID for the parameter.
     *
     * This represents the identify of the variable model which does not change
     * over time.
     */
    getId(): string;
    /** Returns the variable model associated with the parameter model. */
    getVariableModel(): VariableModel;
    /**
     * Tells the parameter model it should fire events.
     *
     * @internal
     */
    startPublishing(): void;
    /**
     * Tells the parameter model it should not fire events.
     *
     * @internal
     */
    stopPublishing(): void;
    /** Sets the procedure model this parameter is a part of. */
    setProcedureModel(model: IProcedureModel): this;
}
//# sourceMappingURL=observable_parameter_model.d.ts.map