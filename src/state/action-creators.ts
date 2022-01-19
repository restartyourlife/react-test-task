import { Dispatch } from 'redux'
import { Action, ActionType } from './action-types'

export const formSubmit = (url: string) => {
    return (dispath: Dispatch<Action>) => {
        dispath({
            type: ActionType.SUBMIT,
            payload: url
        })
    }
}