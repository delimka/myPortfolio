import {
  useEffect,
  useLayoutEffect,
  Dispatch,
  SetStateAction,
  RefObject,
} from "react";

interface ScrollProps {
  scrollToBottom?: boolean;
  setScrollToBottom?: Dispatch<SetStateAction<boolean>>;
  scrollToTop?: boolean;
  setScrollToTop?: Dispatch<SetStateAction<boolean>>;
  ref: RefObject<HTMLDivElement>;
}

export const useScrollToBottom = ({
  scrollToBottom,
  setScrollToBottom,
  ref,
}: ScrollProps): void => {
  useEffect(() => {
    if (scrollToBottom && setScrollToBottom && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
      setScrollToBottom(false);
    }
  }, [scrollToBottom, setScrollToBottom, ref]);
};

export const useScrollToTop = ({
  scrollToTop,
  setScrollToTop,
  ref,
}: ScrollProps): void => {
  useLayoutEffect(() => {
    if (setScrollToTop && ref.current) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      setScrollToTop(false);
    }
  }, [scrollToTop, setScrollToTop, ref]);
};


export const menuScrollHandler = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  scrollToId?: string,
  setMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (!event) return;
  event.preventDefault();
  if (scrollToId) {
    const section = document.getElementById(scrollToId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  if (setMenuOpen) {
    setMenuOpen((p) => !p);
  }
};
