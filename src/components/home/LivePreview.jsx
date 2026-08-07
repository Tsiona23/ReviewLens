import { PreviewCard } from "./PreviewCard";
import { previewData } from "../../data/preview";

export const LivePreview = () => {
  return (
    <div className="relative">
      <PreviewCard data={previewData} />
    </div>
  );
};