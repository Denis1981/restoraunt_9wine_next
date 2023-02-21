import {useState} from "react";
import { Image } from 'antd';

const ImageGalleryGuest = () => {

    const [visible, setVisible] = useState(false);

    return (
        <>
                 <Image
                    preview={{
                      visible: false,
                    }}

                    src="/guest.webp"
                    onClick={() => setVisible(true)}
                  />
                  <div
                    style={{
                      display: 'none',
                    }}
                  >
                  <Image.PreviewGroup
                      preview={{
                        visible,
                        onVisibleChange: (vis) => setVisible(vis),
                      }}
                  >
                      <Image src="/guest1.webp" />
                      <Image src="/guest2.webp" />
                      <Image src="/guest3.webp" />
                      <Image src="/guest4.webp" />
                      <Image src="/guest5.webp" />
                      
                  </Image.PreviewGroup>
            </div>
        </>);
};

export default ImageGalleryGuest;

















