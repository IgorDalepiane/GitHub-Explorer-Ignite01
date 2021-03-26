export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository.name ?? 'Default'}</strong>
            <p>{props.repository.description}</p>
            <a target="_blank" href={props.repository.link}>
                Acessar Repositório
            </a>
        </li>
    );
}
