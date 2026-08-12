import { PreviewCard } from "./PreviewCard";

export const LivePreview = () => {
  const savedResult = sessionStorage.getItem(
    "reviewlens:lastAnalysis"
  );

  const data = savedResult
    ? JSON.parse(savedResult)
    : null;

  return (
    <div className="relative">
      <PreviewCard data={data} />
    </div>
  );
};