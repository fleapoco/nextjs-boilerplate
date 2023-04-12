import React, { useState } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

interface Props {
  url: string;
  onSubmit: (base64: string) => void;
  onCancel: () => void;
}

export const ImageCrop: React.FC<Props> = ({ url, onSubmit, onCancel }) => {
  const [cropper, setCropper] = useState<any>();

  const getCropData = () => {
    if (typeof cropper !== 'undefined') onSubmit(cropper.getCroppedCanvas().toDataURL());
  };

  return (
    <div id="image-crop-wrapper">
      <div className="img-c-body">
        <Cropper
          style={{ height: 400, width: '100%' }}
          zoomTo={0}
          initialAspectRatio={1}
          aspectRatio={1}
          src={url}
          viewMode={1}
          minCropBoxHeight={1000}
          minCropBoxWidth={1000}
          background={true}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false}
          onInitialized={(instance) => setCropper(instance)}
          guides={true}
        />
        <div className="flex-center-between mt-10">
          <button onClick={getCropData}>Save Crop</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
