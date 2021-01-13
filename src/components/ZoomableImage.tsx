import React from 'react';
import { Popup } from 'reactjs-popup';

type ZoomableImageProps = JSX.IntrinsicElements['img'];

const ZoomableImage: React.FC<ZoomableImageProps> = ({
  className,
  alt,
  src,
  ...props
}) => (
  <Popup
    trigger={<img className={className} src={src} alt={alt} />}
    position="right center"
    modal
  >
    <img className={className} src={src} alt={alt} {...props} />
  </Popup>
);

export default ZoomableImage;
