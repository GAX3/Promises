const userLeft = false
const userWatchingCatMeme = false

//Callback
function watchTutorialCallBack(callback, errorCallback){

    if(userLeft){
        errorCallback({
            name: 'User left',
            message: ':c'
        })
    }else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User watching Cat meme',
            message: 'Web < Cat' 
        })
    }else{
        callback('Keep studying')
    }
}

watchTutorialCallBack(
   (message) => {
    console.log('Success: ' + message)
   }, 
   (error) => {
    console.log(error.name + ' ' + error.message)
   }
)

//Promise
function watchTutorialPromise(){
    return new Promise((resolve, rejected) =>{

        if(userLeft){
            rejected({
                name: 'User left',
                message: ':c'
            })
        }else if (userWatchingCatMeme) {
            rejected({
                name: 'User watching Cat meme',
                message: 'Web < Cat' 
            })
        }else{
            resolve({
                name: 'Keep Studying!'
            })
        }
    }) 
}

watchTutorialPromise().then((message) =>{
    console.log(`Success! ${message.name}`);
}).catch((error) =>{
    console.log(`FAILED! ${error.name} , ${error.message}`);
})