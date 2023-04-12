import { ONESIGNAL_APP_ID, ONESIGNAL_SAFARI_WEB_ID } from '@utils/index';
import React, { useEffect } from 'react';
import OneSignal from 'react-onesignal';

interface IProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<IProps> = ({ children }) => {
  const loadPushNotification = async () => {
    await OneSignal.init({
      appId: ONESIGNAL_APP_ID,
      safari_web_id: ONESIGNAL_SAFARI_WEB_ID,
      notifyButton: { enable: true },
      allowLocalhostAsSecureOrigin: true
    });
    OneSignal.showSlidedownPrompt();
    OneSignal.on('subscriptionChange', async (isSubscribed) => {
      if (isSubscribed) {
        const userId = await OneSignal.getUserId();
        // do api call
      }
    });
  };

  useEffect(() => {
    loadPushNotification();
  }, []);

  return <>{children}</>;
};

export default AppLayout;
