const repositoryName = 'unform2';

export function RepositoryList(){
  return (
    <section className="repository-list">
      <h1>List of repositories</h1>

      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in React</p>

          <a href="">
            Access to Repository
          </a>
        </li>

        <li>
          <strong>unform</strong>
          <p>Forms in React</p>

          <a href="">
            Access to Repository
          </a>
        </li>

        <li>
          <strong>unform</strong>
          <p>Forms in React</p>

          <a href="">
            Access to Repository
          </a>
        </li>

      </ul>
    </section>
  );
}