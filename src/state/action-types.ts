export enum ActionType {
    SUBMIT = "submit"
}

interface Submit {
    type: ActionType.SUBMIT
    payload: string
}

export type Action = Submit