
import './cards.css'

const Card = ({ company, logo, posted, title, tags, pay, location }) => {
  return (
      <div className="outer-card">
        <div className="top-row">
          <div className="logo">
            <img src={logo} alt="Company Logo" />
          </div>
          <div className="save-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
          </div>
        </div>
        <div className="middle-row">
          <div className="middle-top">
            <div className="title">{company}</div>
            <div className="time">{posted}</div>  
          </div>
          <div className="post">{title}</div>
          <div className="tags">
            <div className="tag-item">{tags[0]}</div>
            <div className="tag-item">{tags[1]}</div>
          </div>
        </div>
        <div className="bottom-row">
          <div className="divider"></div>
          <div className="bottom-line-1">
            <div className="pay">{pay}</div>
            <div className="bottom-right">Apply Now</div>
          </div>
          <div className="location">{location}</div>
        </div>
      </div>
  )
}

export default Card
