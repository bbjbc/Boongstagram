import StoryFeed from "./story-item";

export default function StoryGrid({ story }) {
  return (
    <ul className="grid grid-cols-3 gap-20 mx-20 p-8">
      {story.map((s) => (
        <li key={s.id}>
          <StoryFeed {...s} />
        </li>
      ))}
    </ul>
  );
}
