import { Outlet, useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation></MainNavigation>
      <main>
        {/* {navigation.state === 'loading' && 'Loading...'} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
