import React from 'react'
function randInt(min,max){
    let x = (max-min) +1
    return min + Math.floor(Math.random()*x)
}
export default function Banner(){
    const r = randInt(1,3)
    let banner=''
    let url = ''

    switch(r)
    {
        
        case 1:
            banner = './logo192.png'
            url = 'https://www.logo192.org'
            break
        case 2:
            banner = './1.jpg'
            url = 'https://www.1.org'
            break
        case 3:
            banner = './2.png'
            url = 'https://www.2.org'
            break
        default: break        
    }
    const bannerClick = () =>{
        window.open(url)
    }
    return <div style={{margin: '20px',textAlign:'center'}}>
        <img src={banner} onClick={bannerClick} style={{cursor:'pointer'}} alt="banner"/>
    </div>
}