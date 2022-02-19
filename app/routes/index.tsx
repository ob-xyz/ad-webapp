import styles from '../styles/index.css';

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
  return (
    <div>
      <h1>Welcome to Airdrop</h1>
    </div>
  );
}
