import React from "react"

// export class NewsItem extends Component
const NewsItem = props => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props
  return (
    <div className="my-3">
      <div className="card">
        <div style={{ display: "flex", justifyContent: "flex - end", position: "absolute", right: 0 }}>
          <span class="badge rounded-pill bg-danger">{source}</span>
        </div>

        <img src={!imageUrl ? "https://assets2.cbsnewsstatic.com/hub/i/r/2023/07/17/74e6200e-7989-4258-a88a-b5edee220ca9/thumbnail/1200x630/a159c097a8ccf0eacd66ab5ac72a02ea/gettyimages-1536853328.jpg?v=596294ea7cf1c3a6f60cc964b1b476a6" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "unknown" : author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a rel="noreferrer" href={newsUrl} target="_blank " className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
