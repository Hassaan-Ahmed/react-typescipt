import { useState } from "react"
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useTypedSelector";

export const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState("");

    const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => setTerm(event.target.value);
    const { searchRepositories } = useActions();
    const { data, error, loading } = useSelector((state) => state.repositories);

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        searchRepositories(term);
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input value={term} onChange={onSearchChange} />
                <button>Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading!!!</h3>}
            {!error && !loading && data.map((name) => <div key={name}>{ name }</div>)}
        </div>
    )
}