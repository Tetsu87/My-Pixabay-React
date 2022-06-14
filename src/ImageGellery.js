import React from 'react'
import './ImageGellery.css';

const ImageGellery = ({fetchData}) => {
  return (
    <div className='images-wrapper'>
        {fetchData.map((data)=> (
            <div className='image' key={data.id}>
                <a href={data.pageURL} target="_blank">
                    <img src={data.largeImageURL} alt=''/>
                </a>
            </div>
        ))}
        
    </div>
  )
}

export default ImageGellery