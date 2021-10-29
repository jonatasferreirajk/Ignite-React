export function RepositoryItem(props){
  return (
    <li>
          <strong>{props.repository?.name}</strong>
          <p>Forms in React</p>

          <a href="">
            Access to Repository
          </a>
        </li>
  );
}