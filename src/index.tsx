import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { bitable, IAttachmentField } from '@lark-base-open/js-sdk';
import { Alert, AlertProps } from 'antd';

import App from './App'
import { initI18n } from './i18n'
import { useTranslation } from 'react-i18next';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoadApp/>
  </React.StrictMode>
);


function LoadApp() {

  const [load, setLoad] = useState(false);
  const [loadErr, setLoadErr] = useState<any>(null)
  useEffect(() => {
    const timer = setTimeout(() => {
      initI18n('en');
      setTimeout(() => {
        setLoadErr(<LoadErr />)

      }, 1000)
    }, 5000)
    bitable.bridge.getLanguage().then((lang) => {
      clearTimeout(timer)
      initI18n(lang as any);
      setLoad(true);
    });
    return () => clearTimeout(timer)
  }, [])

  if (load) {
    return <App />
  }

  return loadErr
}

function LoadErr() {
  const { t } = useTranslation();
  return <div>
    {t('load_error.1')}
    <a target='_blank' href='https://bytedance.feishu.cn/docx/HazFdSHH9ofRGKx8424cwzLlnZc'>{t('load.guide')}</a>
  </div>

}



// function LoadApp() {
//   const [info, setInfo] = useState('get table name, please waiting ....');
//   const [alertType, setAlertType] = useState<AlertProps['type']>('info');
//   useEffect(() => {
//     const fn = async () => {
//       const table = await bitable.base.getActiveTable();
//       const tableName = await table.getName();
//       setInfo(`The table Name is ${tableName}`);
//       setAlertType('success');
//     };
//     fn();
//   }, []);
//
//   return <div>
//     <Alert message={info} type={alertType} />
//   </div>
// }