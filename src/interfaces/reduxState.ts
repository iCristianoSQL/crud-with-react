import { IPosts } from "../components/Dashboard/RegisterPost/types"

export interface IReduxState {
    users: {
        value: IPosts[]
    }
}