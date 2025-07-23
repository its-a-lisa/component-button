/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type ColorChangeValue = "newColorTheme";
export const ColorChangeContext = React.createContext<
  ColorChangeValue | undefined
>("PLEASE_RENDER_INSIDE_PROVIDER" as any);
export function ColorChangeContextProvider(
  props: React.PropsWithChildren<{ value: ColorChangeValue | undefined }>
) {
  return (
    <ColorChangeContext.Provider value={props.value}>
      {props.children}
    </ColorChangeContext.Provider>
  );
}

export function useColorChange() {
  return React.useContext(ColorChangeContext);
}

export default ColorChangeContext;
/* prettier-ignore-end */
