declare module 'gray-matter' {
  interface GrayMatterFile {
    data: { [key: string]: any }
    content: string
    excerpt?: string
    orig?: string
  }
  function matter(input: string | { content: string }, options?: Record<string, unknown>): GrayMatterFile
  export default matter
}
