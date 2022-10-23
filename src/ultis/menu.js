import icons from "./icons";

const { MdOutlineVideoLibrary, BiDoughnutChart, TbChartArcs, VscNotebook } = icons;

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
        icons: <TbChartArcs size={24} />
    },
    {
        path: 'zing-chart',
        text: '#zingchart',
        icons: <BiDoughnutChart size={24} />
    },
    {
        path: 'follows',
        text: 'Theo dõi',
        icons: <VscNotebook size={24} />
    },
]