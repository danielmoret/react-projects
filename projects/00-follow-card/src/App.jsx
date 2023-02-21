import { TwitterFollowCard } from "./TwitterFollowCard";
import "./App.css";

const users = [
  { userName: "daniel", name: "daniel", isFollowing: true },
  { userName: "pheralb", name: "Pablo H.", isFollowing: false },
  { userName: "victor", name: "Victor", isFollowing: true },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => {
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
