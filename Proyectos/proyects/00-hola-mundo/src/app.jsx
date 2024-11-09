import { TwitterFollowCard } from "./twitterFollowCard";

export function App() {
  const users = [
    {
      userName: "minuDev",
      name: "minuDev",
      followers: true,
    },
    {
      userName: "pheralb",
      name: "Pablo H",
      followers: false,
    },
    {
      userName: "JohnDoe",
      name: "John Doe",
      followers: false,
    },
    {
      userName: "PacoHdezs",
      name: "Paco Hdez",
      followers: true,
    },
  ];

  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => {
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            isFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
