chrome.runtime.onMessage.addListener((message,sender,sendRes)=>{
    if(message.action === "captureTab"){
        chrome.tabs.captureVisibleTab(res=>{
            sendRes(res)
        })
        return true
    }
})
