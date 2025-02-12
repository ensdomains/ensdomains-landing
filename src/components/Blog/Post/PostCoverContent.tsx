import { FC } from 'react'
import { BlogPostMetadataPlus } from '~/utils/blog/posts'
import { YoutubeEmbed } from '~/components/YoutubeEmbed/YoutubeEmbed'
import styles from './PostCoverContent.module.css'

export const PostCoverContent: FC<{ post: BlogPostMetadataPlus }> = async ({
  post,
}) => {
  const isYoutube = post.youtube !== undefined

  if (isYoutube) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <YoutubeEmbed src={post.youtube!} />
        </div>
      </div>
    )
  }
}
