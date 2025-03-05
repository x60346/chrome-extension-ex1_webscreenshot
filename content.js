chrome.runtime.onMessage.addListener((message,sender,sendRes)=>{
    if(message.action === "screenshot"){
        window.scrollTo(0,0)
        const {scrollHeight , clientHeight} = document.documentElement

        let captureH = 0
        let captureImages = []
        function capture(){
            chrome.runtime.sendMessage({action:"captureTab"},res=>{
                captureImages.push(res)
            })
            if(captureH < scrollHeight){
                captureH += clientHeight
                setTimeout(()=>{
                    window.scrollTo(0,captureH)
                    capture()
                },1000)
            } else {     
                sendRes({captureImages,scrollHeight})
            }
            
        }
        capture()
        return true
    }
})
