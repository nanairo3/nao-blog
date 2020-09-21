import React from "react"
import "../styles/post-link.css"

const RANDOM_IMG = "https://source.unsplash.com/collection/175083/640x360"

const PostLink = () => {
  return (
    <div className="post_link">
      <div>
        <img src={RANDOM_IMG} className="post_link_image" alt="post_cover" />
      </div>
      <div className="post_link_text">
        <h2>Gatsbyでブログ作成</h2>
        <p className="post_link_body">
          先日、爆速なサイトを作れると噂のReact製フレームワークのGatsbyを学んでみました。
        </p>
        <p className="post_link_date">2020年9月11日</p>
      </div>
    </div>
  )
}

export default PostLink
