import { NextPage } from 'next';

import { IPageProps } from '@interface/index';
import Landing from '@view/landing';
import { Head } from '@components/common/Head';
import { PageConfig } from '@utils/index';
import PageWrapper from '@components/layout/PageWrapper';
import { withAuthServerSideProps } from '@utils/pageProps';

const Index: NextPage<IPageProps> = ({ userProps }) => {
  return (
    <>
      <Head title={PageConfig.home.title} description={PageConfig.home.description} />
      <PageWrapper success={userProps.success} message={userProps.message} data={userProps.data}>
        <Landing />
      </PageWrapper>
    </>
  );
};

export const getServerSideProps = withAuthServerSideProps();

export default Index;
