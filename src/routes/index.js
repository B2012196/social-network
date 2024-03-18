import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import { HeaderOnly } from '~/layouts/';
import Search from '~/pages/Search';
import config from '~/config';
import Live from '~/pages/Live';
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },

    {
        path: config.routes.following,
        component: Following,
    },

    {
        path: config.routes.nickname,
        component: Profile,
    },
    {
        path: config.routes.live,
        component: Live,
    },

    {
        path: config.routes.search,
        component: Search,
        layout: null,
    },

    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
