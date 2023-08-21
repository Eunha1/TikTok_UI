// Layout
import { HeaderOnly } from '@/Components/Layout';

// Pages
import Home from '@/Pages/Home';
import Following from '@/Pages/Following';
import Profile from '@/Pages/Profile';
import Upload from '@/Pages/Upload';
import Search from '@/Pages/Search';

// Route
const publicRoutes = [
   { path: '/', component: Home },
   { path: '/following', component: Following },
   { path: '/@:nickname', component: Profile },
   { path: '/upload', component: Upload, layout: HeaderOnly },
   { path: '/search', component: Search, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
