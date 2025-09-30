import { useState } from 'react';
import InnerBannerTitle from '../components/common/settings/InnerBannerTitle'
import { Editor } from 'primereact/editor';


const EditDesc = () => {
  const [text, setText] = useState('');
    const onTextChange = (e) => {
    setText(e.htmlValue);
  };
  return (
    <>
    <InnerBannerTitle wrapperClass='flex items-start gap-[24px] flex-wrap' smTitle='Edit' isSave={true}/>
  <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} className='ct-editor bg-(--bg-white) mt-[33px]' style={{ height: '320px' }} />
    </>
  )
}

export default EditDesc