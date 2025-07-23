/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type SwitchesValue = "elegantStyle" | "bohoStyle" | "gamerStyle";
export const SwitchesContext = React.createContext<SwitchesValue | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);
export function SwitchesContextProvider(
  props: React.PropsWithChildren<{ value: SwitchesValue | undefined }>
) {
  return (
    <SwitchesContext.Provider value={props.value}>
      {props.children}
    </SwitchesContext.Provider>
  );
}

export function useSwitches() {
  return React.useContext(SwitchesContext);
}

export default SwitchesContext;
/* prettier-ignore-end */
