import './index.css'

// Write your code here.
const ThumbnailItem = props => {
  const {item, onClickThumbnail, isClicked} = props
  const {thumbnailAltText, thumbnailUrl, id} = item

  const handleOnClickButton = () => {
    onClickThumbnail(id)
  }

  return (
    <li className="thumbnail-item">
      <button className="button" onClick={handleOnClickButton} type="button">
        <img
          alt={thumbnailAltText}
          src={thumbnailUrl}
          className={isClicked ? 'thumb-click' : 'thumb'}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
