import { useLocation, useParams } from 'react-router-dom';
import Layout from '../../../layout/Layout';
import MyPageContainer from '../../../containers/mypage/MyPageContainer';
import MyPageProfile from '../../../containers/mypage/MyPageProfile';
import MyPageFollow from '../../../containers/mypage/MyPageFollow';
import MyPageWorkContainer from '../../../containers/mypage/MyPageWorkContainer';
import MyPageFeedback from '../../../containers/mypage/MyPageFeedback';
import MyPageScrapContainer from '../../../containers/mypage/MyPageScrapContainer';
import MyPageFAQ from '../../../containers/mypage/MyPageFAQ';
import MyPageFAQNew from '../../../containers/mypage/MyPageFAQNew';
import MyPageFAQDetail from '../../../containers/mypage/MyPageFAQDetail';
import MyPageWrapper from './MyPage.styles';

function MyPage() {
  const { pathname } = useLocation();
  const { category, detailId } = useParams();

  const params = {
    '/mypage/profile': MyPageProfile,
    '/mypage/following': MyPageFollow,
    '/mypage/work': MyPageWorkContainer,
    '/mypage/myfeedback': MyPageFeedback,
    '/mypage/scrap': MyPageScrapContainer,
    '/mypage/faq': MyPageFAQ,
    ['/mypage/faq/' + category + '/new']: MyPageFAQNew,
    ['/mypage/faq/' + category + '/' + detailId]: MyPageFAQDetail,
  };

  const ParamsToRender = params[pathname];

  return (
    <Layout>
      <MyPageWrapper>
        <MyPageContainer />
        {ParamsToRender && <ParamsToRender />}
      </MyPageWrapper>
    </Layout>
  );
}

export default MyPage;
