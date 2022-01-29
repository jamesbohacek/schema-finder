import {SetStateAction, KeyboardEvent} from "react";

interface NextPathState {
  readonly entries: unknown[][];
  readonly lastCol: number;
  readonly lastRow: number;
  readonly path: number[];
}

function getNextPath(
  {entries, lastCol, lastRow, path}: NextPathState,
  e: KeyboardEvent
): number[] | undefined {
  switch (e.key) {
    default: {
      return;
    }
    case "ArrowLeft": {
      return path.slice(0, -1);
    }
    case "ArrowRight": {
      if (path.length === entries.length) return path;
      return [...path, 0];
    }
    case "ArrowUp": {
      let next: number;
      if (e.ctrlKey) {
        next = 0;
      } else {
        next = Math.max(lastRow - 1, 0);
      }

      return [...path.slice(0, -1), next];
    }
    case "ArrowDown": {
      let next: number;
      if (e.ctrlKey || !path.length) {
        next = entries[Math.max(lastCol, 0)].length - 1;
      } else {
        const colLen = entries[lastCol].length;
        next = Math.min(lastRow + 1, colLen - 1);
      }

      return [...path.slice(0, -1), next];
    }
    case "Home": {
      return path.slice(0, 1);
    }
  }
}

export interface KeyDownDeps extends NextPathState {
  readonly setPath: (value: SetStateAction<number[]>) => void;
}

export function getKeyDownHandler(
  deps: KeyDownDeps
): React.KeyboardEventHandler {
  const boundGetNextPath = getNextPath.bind(null, deps);
  const {setPath} = deps;

  return function handleKeyDown(e) {
    const nextPath = boundGetNextPath(e);
    nextPath && setPath(nextPath);
    e.preventDefault();
  };
}
