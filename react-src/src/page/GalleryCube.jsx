import RowImages from '../components/RowImages';

const GalleryCube = ({ prefixImg = "n", folder = "artisans" }) => {
  return (
    <section className='gallery-cube'>
      <div className='side behind'>
        <RowImages
          prefixImg={prefixImg}
          folder={folder}
          limit={[41, 60]}
        ></RowImages>
        <RowImages
          prefixImg={prefixImg}
          folder={folder}
          limit={[1, 20]}
        ></RowImages>
        <RowImages
          prefixImg={prefixImg}
          folder={folder}
          limit={[81, 100]}
        ></RowImages>
        <RowImages
          prefixImg={prefixImg}
          folder={folder}
          limit={[21, 40]}
        ></RowImages>
        <RowImages
          prefixImg={prefixImg}
          folder={folder}
          limit={[61, 80]}
        ></RowImages>
      </div>
      <div className='side left'>
        <RowImages
          prefixImg={prefixImg}
          folder={folder}
          limit={[81, 100]}
        ></RowImages>
        <RowImages
          prefixImg={prefixImg}
          folder={folder}
          limit={[41, 60]}
        ></RowImages>
        <RowImages
          prefixImg={prefixImg}
          folder={folder}
          limit={[61, 80]}
        ></RowImages>
        <RowImages
          prefixImg={prefixImg}
          folder={folder}
          limit={[1, 20]}
        ></RowImages>
        <RowImages
          prefixImg={prefixImg}
          folder={folder}
          limit={[21, 40]}
        ></RowImages>
      </div>
      <div className='side right'>
        <RowImages
          prefixImg={prefixImg}
          folder={folder}
          limit={[61, 80]}
        ></RowImages>
        <RowImages
          prefixImg={prefixImg}
          folder={folder}
          limit={[21, 40]}
        ></RowImages>
        <RowImages
          prefixImg={prefixImg}
          folder={folder}
          limit={[1, 20]}
        ></RowImages>
        <RowImages
          prefixImg={prefixImg}
          folder={folder}
          limit={[81, 100]}
        ></RowImages>
        <RowImages
          prefixImg={prefixImg}
          folder={folder}
          limit={[41, 60]}
        ></RowImages>
      </div>
      <div className='side top'>
        <RowImages
          prefixImg={prefixImg}
          folder={folder}
          limit={[21, 40]}
        ></RowImages>
        <RowImages
          prefixImg={prefixImg}
          folder={folder}
          limit={[61, 80]}
        ></RowImages>
        <RowImages
          prefixImg={prefixImg}
          folder={folder}
          limit={[41, 60]}
        ></RowImages>
        <RowImages
          prefixImg={prefixImg}
          folder={folder}
          limit={[1, 20]}
        ></RowImages>
        <RowImages
          prefixImg={prefixImg}
          folder={folder}
          limit={[81, 100]}
        ></RowImages>
      </div>
      <div className='side bottom'>
        <RowImages
          prefixImg={prefixImg}
          folder={folder}
          limit={[1, 20]}
        ></RowImages>
        <RowImages
          prefixImg={prefixImg}
          folder={folder}
          limit={[81, 100]}
        ></RowImages>
        <RowImages
          prefixImg={prefixImg}
          folder={folder}
          limit={[61, 80]}
        ></RowImages>
        <RowImages
          prefixImg={prefixImg}
          folder={folder}
          limit={[41, 60]}
        ></RowImages>
        <RowImages
          prefixImg={prefixImg}
          folder={folder}
          limit={[21, 40]}
        ></RowImages>
      </div>
    </section>
  );
};

export default GalleryCube;
