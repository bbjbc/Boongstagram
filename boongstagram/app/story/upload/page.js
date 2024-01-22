import ImagePicker from "@/components/images/image-picker";
import StoryFormSubmit from "@/components/story/story-form-submit";

export default function StoryUploadPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold mb-2">
          이곳에서 당신의 이야기를 나눠보세요!
        </h1>
        <p className="text-rose-800 text-xl">
          우리의 삶은 작은 행복에서 시작되어, 그 소중한 순간들로 가득 차
          있습니다.
          <br /> 당신이 경험한 감동, 흥미로운 순간, 또는 생각과 감정을 공유하면
          어떨까요?
        </p>
      </header>
      <form className="max-w-2xl w-full">
        <p className="mb-4">
          <label htmlFor="title" className="block text-orange-800 text-lg">
            피드 제목
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-full border rounded-lg py-2 px-3 bg-slate-200"
          />
        </p>
        <p className="mb-4">
          <label htmlFor="date" className="block text-orange-800 text-lg">
            그 순간의 날짜
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            className="w-full border rounded-lg py-2 px-3 bg-slate-200"
          />
        </p>
        <p className="mb-4">
          <label htmlFor="summary" className="block text-orange-800 text-lg">
            피드 내용
          </label>
          <textarea
            id="summary"
            name="summary"
            rows="5"
            required
            className="w-full border rounded-lg py-2 px-3 bg-slate-200"
          ></textarea>
        </p>
        <ImagePicker name="image" />
      </form>
      <p className="mt-4 mb-10">
        <StoryFormSubmit />
      </p>
    </div>
  );
}
