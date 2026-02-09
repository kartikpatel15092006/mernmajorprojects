import React, { useEffect, useRef } from 'react'
import '../../styles/reels.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const videos = [
  {
    id: 1,
    src: 'https://ik.imagekit.io/jlq2tkeikl/b7bd6c28-33fc-414c-a74d-7f3a3a78f235_fR_9iS15K',
    desc: 'A short demonstration of Big Buck Bunny. Visit our store for props and more.'
  },
  {
    id: 2,
    src: 'https://ik.imagekit.io/jlq2tkeikl/b7bd6c28-33fc-414c-a74d-7f3a3a78f235_fR_9iS15K',
    desc: 'Another short clip to show vertical reels UI. Tap Visit Store to open.'
  },
  {
    id: 3,
    src: 'https://ik.imagekit.io/jlq2tkeikl/b7bd6c28-33fc-414c-a74d-7f3a3a78f235_fR_9iS15K',
    desc: 'Demo video three — description is truncated to two lines for compactness.'
  }
]

const HOME = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const videos = container.querySelectorAll('video')

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const video = entry.target
          if (entry.isIntersecting) {
            video.play().catch(() => {})
          } else {
            video.pause()
            video.currentTime = 0
          }
        })
      },
      { threshold: 0.75 }
    )

    videos.forEach(v => io.observe(v))

    return () => io.disconnect()
  }, [])

  useEffect(() => {

axios.get("http://localhost:3000/api/food")

  })

  return (
    <div className="reels-container" ref={containerRef}>
      {videos.map(item => (
        <section className="reel" key={item.id}>
          <video
            className="reel-video"
            src={item.src}
            muted
            loop
            playsInline
            preload="metadata"
          />

          <div className="reel-overlay">
            <p className="reel-desc">{item.desc}</p>
            <button className="visit-store">Visit Store</button>
          </div>
        </section>
      ))}
    </div>
  )
}

export default HOME