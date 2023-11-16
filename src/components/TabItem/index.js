import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActiveTab} = props
  const {displayText, tabId} = tabDetails
  const activeTabClass = isActiveTab ? 'active-tab-btn' : ''
  const onclickDisplayTab = () => {
    clickTabItem(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClass}`}
        onClick={onclickDisplayTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
