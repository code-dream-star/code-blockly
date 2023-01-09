/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import { Abstract as AbstractEvent, AbstractEventJson } from './events_abstract.js';
import type { IProcedureModel } from '../interfaces/i_procedure_model.js';
import type { Workspace } from '../workspace.js';
/**
 * The base event for an event associated with a procedure.
 */
export declare abstract class ProcedureBase extends AbstractEvent {
    readonly model: IProcedureModel;
    isBlank: boolean;
    constructor(workspace: Workspace, model: IProcedureModel);
    /**
     * Encode the event as JSON.
     *
     * @returns JSON representation.
     */
    toJson(): ProcedureBaseJson;
}
export interface ProcedureBaseJson extends AbstractEventJson {
    procedureId: string;
}
//# sourceMappingURL=events_procedure_base.d.ts.map