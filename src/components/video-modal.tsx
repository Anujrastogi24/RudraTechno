import { createPortal } from "react-dom";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
} & (
    | {
      channel: "youtube";
      videoId: string;
    }
    | {
      channel?: "custom";
      src: string;
    }
  );

export default function VideoModal({ isOpen, onClose, ...props }: PropsType) {
  if (!isOpen) return null;

  let src = "";

  if (props.channel === "youtube") {
    src = `https://www.youtube.com/embed/${props.videoId}`;
  } else {
    src = props.src;
  }

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl"
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute -top-10 right-0 cursor-pointer text-4xl leading-none text-white transition hover:text-white/70 sm:-top-2 sm:-right-4 sm:translate-x-full sm:text-7xl"
        >
          <span className="sr-only">Close modal</span>
          <span aria-hidden>&times;</span>
        </button>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-900">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={src}
            allowFullScreen
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}
