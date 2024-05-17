export type FunctionScrollDetect = {
  options?: {
    startOffset?: number;
    endOffset?: number;
  };
  isOnElement: (el: HTMLElement) => void;
  isNotOnElement: (el: HTMLElement) => void;
};
