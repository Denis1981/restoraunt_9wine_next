import {useState} from "react";
import { Image } from 'antd';

const ImageGalleryCelebrates = () => {

    const [visible, setVisible] = useState(false);

    return (
        <>
                 <Image
                    preview={{
                      visible: false,
                    }}

                    src="/celebs.webp"
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
                      <Image src="/celebs1.webp" />
                      <Image src="/celebs2.webp" />
                      <Image src="/celebs3.webp" />
                      <Image src="/celebs4.webp" />
                      <Image src="/celebs5.webp" />
                      
                  </Image.PreviewGroup>
            </div>
        </>);
};

export default ImageGalleryCelebrates;
