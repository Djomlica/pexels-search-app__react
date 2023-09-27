import ImageShow from "./ImageShow";

import "./ImageList.css";

function ImageList({ imageList }) {
const renderedImages = imageList.map((img) => {
    return <ImageShow image={img} key={img.id} />;
});

return <div className="image-list">
        {renderedImages}
    </div>
}

export default ImageList;