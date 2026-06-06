export interface PaletteColor {
  name: string
  hex: string
  role: string
  token?: string
}

export interface Surface {
  name: string
  token: string
  hex: string
}

export interface TypefaceSpec {
  fontFamily: string
  label: string
  weights: string[]
}

export interface Typography {
  display?: TypefaceSpec
  ui?: TypefaceSpec
  mono?: TypefaceSpec
}

export interface TypeScaleEntry {
  id: string
  label: string
  font: 'display' | 'ui' | 'mono'
  size: number
  lh: number
  text: string
}

export interface Sigil {
  label: string
  file: string
  caption: string
}

export interface ProseSection {
  num: string
  title: string
  body: string
}

export interface DesignSystem {
  slug: string
  name: string
  tagline: string
  raw: string
  preview?: string
  palette: PaletteColor[]
  surfaces: Surface[]
  typography: Typography
  typescale: TypeScaleEntry[]
  spacing: Record<string, string>
  rounded: Record<string, string>
  sigils?: Sigil[]
  prose: {
    overview: string
    sections: ProseSection[]
  }
}
