import Link from 'next/link';
import styles from '../../styles/Users.module.css';

//=====[FETCHING THE JSON DATA]================================================================================

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
};

//=====[CREATING THE USERS COMPONENT]=========================================================================

const Users = ({ users }) => {
  return (
    <div>
      <h1>List of Users</h1>
      {users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <a className={styles.single}>
            <h3>{user.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Users;
