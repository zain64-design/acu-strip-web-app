import React, { useState } from 'react'

const useTabs = (tabsArray = [], defaultTab = null) => {
    const [activeTab, setActiveTab] = useState( defaultTab || (tabsArray.length > 0 ? tabsArray[0].key : null));

  const onTabClick = (key) => {
    setActiveTab(key);
  };
return {
    activeTab,
    tabs: tabsArray,
    onTabClick,
  };
}

export default useTabs