import images from "./images"

const data = {
    user: {
        name: 'Developer Students Club',
        img: images.avt
    },
    summary: [
        {
            title: 'Projects',
            subtitle: 'Projects attempted',
            value: '6',
            percent: 70
        },
        {
            title: 'Events',
            subtitle: 'Available events today',
            value: '3',
            percent: 49
        },
        {
            title: 'Sold projects',
            subtitle: 'Total Costs',
            value: '2M',
            percent: 38
        },
        {
            title: 'Visits',
            subtitle: 'Total visits today',
            value: '250',
            percent: 55
        }
    ],
    revenueSummary: {
        title: 'Sold Projects',
        value: '2M',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [300, 300, 280, 380, 200, 300, 280, 350]
        }
    },
    overall: [
        {
            value: '26',
            title: 'Events'
        },
        {
            value: '220',
            title: 'Users'
        },
        {
            value: '40',
            title: 'Projects'
        },
        {
            value: '5.5M',
            title: 'Outside Costs'
        }
    ],
    revenueByChannel: [
        {
            title: 'Direct',
            value: 70
        },
        {
            title: 'External search',
            value: 40
        },
        {
            title: 'Referal',
            value: 60
        },
        {
            title: 'Social',
            value: 30
        }
    ],
    revenueByMonths: {
        labels: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }
}

export default data