import { describe, it, expect } from 'vitest'
import { parseDesignMd } from '../src/lib/parser'

const MINIMAL_MD = `---
name: Test Design
tagline: A test design system.
palette:
  - name: Black
    hex: "#000000"
    role: Background
surfaces:
  - name: Base
    token: --base
    hex: "#000000"
typography:
  ui:
    fontFamily: Inter
    label: Interface · Inter
    weights: [Regular 400]
typescale:
  - id: B1
    label: BODY
    font: ui
    size: 14
    lh: 18
    text: Sample text here.
spacing:
  sm: 8px
rounded:
  md: 4px
---

## Overview

This is the overview paragraph.

## 01 — Palette

Palette description here.
`

describe('parseDesignMd', () => {
  it('parses name and tagline', () => {
    const result = parseDesignMd(MINIMAL_MD, 'test-design')
    expect(result.name).toBe('Test Design')
    expect(result.tagline).toBe('A test design system.')
    expect(result.slug).toBe('test-design')
  })

  it('parses palette', () => {
    const result = parseDesignMd(MINIMAL_MD, 'test-design')
    expect(result.palette).toHaveLength(1)
    expect(result.palette[0]).toMatchObject({
      name: 'Black',
      hex: '#000000',
      role: 'Background',
    })
  })

  it('parses surfaces', () => {
    const result = parseDesignMd(MINIMAL_MD, 'test-design')
    expect(result.surfaces).toHaveLength(1)
    expect(result.surfaces[0]).toMatchObject({ name: 'Base', token: '--base', hex: '#000000' })
  })

  it('parses typography', () => {
    const result = parseDesignMd(MINIMAL_MD, 'test-design')
    expect(result.typography.ui?.fontFamily).toBe('Inter')
    expect(result.typography.ui?.weights).toEqual(['Regular 400'])
  })

  it('parses typescale', () => {
    const result = parseDesignMd(MINIMAL_MD, 'test-design')
    expect(result.typescale).toHaveLength(1)
    expect(result.typescale[0]).toMatchObject({ id: 'B1', font: 'ui', size: 14 })
  })

  it('parses spacing and rounded', () => {
    const result = parseDesignMd(MINIMAL_MD, 'test-design')
    expect(result.spacing).toEqual({ sm: '8px' })
    expect(result.rounded).toEqual({ md: '4px' })
  })

  it('extracts overview prose as HTML', () => {
    const result = parseDesignMd(MINIMAL_MD, 'test-design')
    expect(result.prose.overview).toContain('This is the overview paragraph.')
  })

  it('extracts numbered sections', () => {
    const result = parseDesignMd(MINIMAL_MD, 'test-design')
    expect(result.prose.sections).toHaveLength(1)
    expect(result.prose.sections[0]).toMatchObject({
      num: '01',
      title: 'Palette',
    })
    expect(result.prose.sections[0].body).toContain('Palette description here.')
  })

  it('returns undefined preview when not in frontmatter', () => {
    const result = parseDesignMd(MINIMAL_MD, 'test-design')
    expect(result.preview).toBeUndefined()
  })

  it('parses optional preview field', () => {
    const mdWithPreview = MINIMAL_MD.replace('tagline: A test design system.', 'tagline: A test design system.\npreview: preview.html')
    const result = parseDesignMd(mdWithPreview, 'test-design')
    expect(result.preview).toBe('preview.html')
  })

  it('returns undefined sigils when not in frontmatter', () => {
    const result = parseDesignMd(MINIMAL_MD, 'test-design')
    expect(result.sigils).toBeUndefined()
  })

  it('parses optional sigils field', () => {
    const mdWithSigils = MINIMAL_MD.replace(
      'spacing:',
      `sigils:
  - label: Test Mark
    file: test.svg
    caption: test caption
spacing:`
    )
    const result = parseDesignMd(mdWithSigils, 'test-design')
    expect(result.sigils).toHaveLength(1)
    expect(result.sigils![0].label).toBe('Test Mark')
  })
})
