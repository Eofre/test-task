/* eslint-disable @typescript-eslint/no-explicit-any */

import { ElementType, Suspense } from "react";
import { UiLoader } from ".";

export function Loadable(Component: ElementType) {
  return function fn(props: any) {
    return (
      <Suspense fallback={<UiLoader full />}>
        <Component {...props} />
      </Suspense>
    );
  };
}
