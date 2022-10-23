import icons from "./icons";

const { MdOutlineVideoLibrary } = icons;

export const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá nhân',
        icons: <MdOutlineVideoLibrary size={24} />
    },
    {
        path: '',
        text: 'Khám phá',
        end: true,
        icons: <MdOutlineVideoLibrary size={24} />
    },
    {
        path: 'zing-chart',
        text: '#zingchart',
        icons: <MdOutlineVideoLibrary size={24} />
    },
    {
        path: 'follows',
        text: 'Theo dõi',
        icons: <MdOutlineVideoLibrary size={24} />
    },
]