import StoryFeed from "./story-item";

export default function StoryGrid({ story }) {
  return (
    <ul className="w-90p max-w-90rem grid grid-cols-auto-fill grid-flow-row-dense gap-20 m-8 list-none p-0">
      {story.map((s) => (
        <li key={s.id}>
          <StoryFeed {...story} />
        </li>
      ))}
    </ul>
  );
}
