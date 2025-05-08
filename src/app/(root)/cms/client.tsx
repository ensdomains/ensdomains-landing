'use client'

import {
  BoldItalicUnderlineToggles,
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  quotePlugin,
  thematicBreakPlugin,
  imagePlugin,
  toolbarPlugin,
  UndoRedo,
  linkPlugin,
  linkDialogPlugin,
  CreateLink,
  InsertImage,
  MDXEditorMethods,
} from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'

import styles from './page.module.css'
import ui from '~/styles/ui.module.css'
import { useRef } from 'react'

export function CMSClient() {
  const ref = useRef<MDXEditorMethods>(null)
  const files = useRef<File[]>([])

  const imageUploadHandler = async (image: File) => {
    // Save the image in memory so we can upload it later
    files.current.push(image)

    // Render the image in the editor in the meantime
    const buffer = await image.arrayBuffer()
    const blob = new Blob([buffer], { type: image.type })
    return URL.createObjectURL(blob)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const markdown = ref.current?.getMarkdown()
    console.log(markdown)
    console.log(files.current)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <MDXEditor
        ref={ref}
        markdown="# Hello world"
        contentEditableClassName={styles.editor}
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
          markdownShortcutPlugin(),
          linkDialogPlugin(),
          linkPlugin(),
          imagePlugin({
            imageUploadHandler,
          }),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <CreateLink />
                <InsertImage />
              </>
            ),
          }),
        ]}
      />

      <button className={ui.button} type="submit">
        Submit
      </button>
    </form>
  )
}
