import {useState} from "react";
import { Image } from 'antd';

const ImageGalleryMenus = () => {

    const [visible, setVisible] = useState(false);

    return (
        <>
                 <Image
                    preview={{
                      visible: false,
                    }}

                    src="/menus_main.webp"
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
                      <Image src="/menus1.webp" />
                      <Image src="/menus2.webp" />
                      <Image src="/menus3.webp" />
                      <Image src="/menus4.webp" />
                      <Image src="/menus5.webp" />
                      <Image src="/menus6.webp" />
                      <Image src="/menus7.webp" />
                      <Image src="/menus8.webp" />
                      <Image src="/menus9.webp" />
                      <Image src="/menus10.webp" />
                      <Image src="/menus11.webp" />
                      <Image src="/menus12.webp" />
                      <Image src="/menus13.webp" />
                      <Image src="/menus14.webp" />
                      <Image src="/menus15.webp" />
                      <Image src="/menus16.webp" />
                      <Image src="/menus17.webp" />
                      <Image src="/menus18.webp" />
                      <Image src="/menus19.webp" />
                      <Image src="/menus20.webp" />
                      <Image src="/menus21.webp" />
                      <Image src="/menus22.webp" />
                      <Image src="/menus23.webp" />
                      <Image src="/menus24.webp" />
                      <Image src="/menus25.webp" />

                      
                  </Image.PreviewGroup>
            </div>
        </>);
};

export default ImageGalleryMenus;
