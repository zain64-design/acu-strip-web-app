import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import Text from '../ui/Text';

const SalesAnalytics = () => {
    const [options, setOptions] = useState({});
    const [series, setSeries] = useState([]);

    useEffect(() => {

        const chartData2 = {
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            salesAnalytics: [75, 40, 100, 60, 80, 50, 120, 80, 100, 70, 110, 145],
        };

        const config = {
            series: [
                {
                    name: 'Sales Analytics',
                    type: 'line',
                    data: chartData2.salesAnalytics,
                    color: '#1E9119',
                }
            ],
            chart: {
                height: '100%',
                width: '100%',
                type: 'line',
                stacked: false,
                toolbar: { show: false },
                animations: {
                    enabled: true,
                    easing: 'easeinout',
                    speed: 2000,
                },
                zoom: { enabled: false }
            },
            dataLabels: { enabled: false },
            stroke: { width: 2, curve: 'smooth' },
            markers: {
                size: 0,
                hover: { sizeOffset: 4 },
                colors: ['#000000'],
                strokeColor: '#1E9119',
                strokeWidth: 3
            },
            xaxis: {
                categories: chartData2.months,
                labels: {
                    style: {
                        fontSize: '12px',
                        colors: '#64748B',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontWeight: '400',
                    }
                },
                axisBorder: { show: false },
                axisTicks: { show: false }
            },
            yaxis: {
                show: true,
                max: 150,
                min: 25,
                axisBorder: { show: false },
                axisTicks: { show: false },
                labels: {
                    style: {
                        fontSize: '12px',
                        colors: '#64748B',
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontWeight: '400',
                    }
                }
            },
            grid: {
                borderColor: '#d0d0d0',
                strokeDashArray: 10,
            },
            colors: ['#9F0C0C'],
            legend: { show: false },
        };

        setOptions(config);
        setSeries(config.series);
    }, []);

    return (
        <div className="bg-(--bg-white) rounded-[15px] p-[22px] col-span-full lg:col-span-2">
            <Text as='h6' className='font-urbanist font-bold text-lg capitalize'>Sales Analytics</Text>
            <div className='h-[35vh]'>
                <ReactApexChart
                    options={options}
                    series={series}
                    type="line"
                    height='100%'
                    className="mt-5"
                />
            </div>
        </div>
    )
}

export default SalesAnalytics