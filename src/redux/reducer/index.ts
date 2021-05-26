import { combineReducers } from "redux";
import { RepositoryReducer } from './repository.reducer';

const reducers = combineReducers({
    repositories: RepositoryReducer
});

export type RootState = ReturnType<typeof reducers>

export default reducers;