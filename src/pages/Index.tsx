import React from 'react';

import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginForm from '@/components/Login/LoginForm';

/**
 * The main landing page of the application, which serves as the login page.
 * It utilizes the MainAppLayout to center the LoginForm component on the screen.
 * This composition creates the final view as specified by the design requirements.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginForm />
    </MainAppLayout>
  );
};

export default IndexPage;
