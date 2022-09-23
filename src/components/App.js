import { useState } from "react";

const Modal = ({ url }) => {
  return (
    <div>
      <p>MODAL</p>
      <p>URL : {url}</p>
    </div>
  );
}

export default function App() {
  const [images, setImages] = useState([
    { preview: 'preview-1', large: 'large-1' },
    { preview: 'preview-2', large: 'large-2' },
    {preview: 'preview-3', large: 'large-3'},
  ]);
    return (
      <div>
        <div>
          {images.map(image => (
            <div key={image.large}>{image.large}</div>
          ))}
        </div>
        <Modal url="4" />
       </div>
    );
}