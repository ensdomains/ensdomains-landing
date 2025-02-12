import { mdxAnnotations } from 'mdx-annotations'

export const recmaPlugins = [
  /**
     * Add support for annotations to MDX.
     * An annotation is a JavaScript object associated with an MDX node. The object properties are passed to the resulting JSX element as props.
     * @see https://www.npmjs.com/package/mdx-annotations
     */
  mdxAnnotations.recma,
]
