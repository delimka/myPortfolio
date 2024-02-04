import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";

interface ScrollContextProps {
  scrollToTop: boolean;
  setScrollToTop: Dispatch<SetStateAction<boolean>>;
  scrollToBottom: boolean;
  setScrollToBottom: Dispatch<SetStateAction<boolean>>;
}

export const ScrollContext = createContext<ScrollContextProps>({
  scrollToTop: false,
  setScrollToTop: () => {},
  scrollToBottom: false,
  setScrollToBottom: () => {},
});

export const ScrollProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [scrollToTop, setScrollToTop] = useState(false);
  const [scrollToBottom, setScrollToBottom] = useState(false);

  const memoizedSetScrollToTop = useCallback(
    (value: SetStateAction<boolean>) => setScrollToTop((prevState) => {
      const newState = typeof value === 'boolean' ? value : !prevState;
      return newState;
    }),
    []
  );

  const memoizedSetScrollToBottom = useCallback(
    (value: SetStateAction<boolean>) => setScrollToBottom((prevState) => {
      const newState = typeof value === 'boolean' ? value : !prevState;
      return newState;
    }),
    []
  );

  const value: ScrollContextProps = useMemo(() => ({
    scrollToTop,
    scrollToBottom,
    setScrollToBottom: memoizedSetScrollToBottom,
    setScrollToTop: memoizedSetScrollToTop,
  }), [scrollToTop, scrollToBottom, memoizedSetScrollToBottom, memoizedSetScrollToTop]);

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  return useContext(ScrollContext);
};
