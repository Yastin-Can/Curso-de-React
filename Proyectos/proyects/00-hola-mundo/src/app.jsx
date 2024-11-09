import { TwitterFollowCard } from "./twitterFollowCard";

export function App () {
    return (
        <section className="App">
            <TwitterFollowCard userName={'miduDev'}>
            Midudev
            </TwitterFollowCard>
            <TwitterFollowCard userName={'pheralb'}>
            Pablo Hernandez
            </TwitterFollowCard>
        </section>
    )
}