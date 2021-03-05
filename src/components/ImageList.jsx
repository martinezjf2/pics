import React from "react";

function ImageList(props) {

    const images = props.images.map((image, index) => {
        console.log(index);
        return <img src={image.urls.regular} key={index} />
    });
    
    return (
            <div>
                {images}
            </div>
        );
}

export default ImageList;