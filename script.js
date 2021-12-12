async function getContent(){

    try {
        const response = await fetch('https://api.pexels.com/v1')
            response.json()
            
        const response = await (await fetch('563492ad6f91700001000001242fee435ddb41ed9d29063f9690563a'))
        const photos = response.body.getReader()
        console.log(photos)
        //document.querySelector('.cont').innerHTML = photos
    } catch (error) {
        console.error(error)
    }
}

