import {useState} from "react";
import { Image } from 'antd';

const ImageGalleryInterior = () => {

    const [visible, setVisible] = useState(false);

    return (
        <>
                 <Image
                    preview={{
                      visible: false,
                    }}

                    src="/interior.webp"
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
                      <Image src="/interior1.webp" />
                      <Image src="/interior2.webp" />
                      <Image src="/interior3.webp" />
                      <Image src="/interior4.webp" />
                      <Image src="/interior5.webp" />
                      <Image src="/interior6.webp" />
                      <Image src="/interior7.webp" />
                      <Image src="/interior8.webp" />
                      <Image src="/interior9.webp" />
                  </Image.PreviewGroup>
            </div>
        </>);
};

export default ImageGalleryInterior;