document.querySelector("#clickMe").addEventListener("click",()=>{
    chrome.tabs.query({active:true,currentWindow:true},tabs=>{
        chrome.tabs.sendMessage(tabs[0].id,{action:"screenshot"},res=>{
            const imageList = res.captureImages           
            
            if(imageList.length){
                
                const canvas = document.createElement('canvas')
                const canvas2d = canvas.getContext('2d')
        
                const image = new Image()
                image.onload = () => {
                    canvas.width = image.width
                    canvas.height = res.scrollHeight + image.height*2

                    imageList.forEach((item,index)=>{
                        const i = new Image()
                        i.onload = ()=>{
                            drawCanvas(i,index)
                        }
                        i.src = item
                    })

                    function drawCanvas(item,index){
                        console.log(index*image.height,"@@@",res.scrollHeight);
                        
                        if(index === imageList.length-1){
                            canvas2d.drawImage(item , 0 , res.scrollHeight + image.height)
                            let link = document.createElement('a')
                            link.href = canvas.toDataURL()
                            link.download = 'screenshot.png'
                            console.log('download!');
                            
                            link.click()
                        } else {
                            canvas2d.drawImage(item , 0 , index*image.height)
                        }
                    }
                }
                image.src = imageList[0]
            } else {
                alert('截圖失敗！')
            }
        })
    })    
})
