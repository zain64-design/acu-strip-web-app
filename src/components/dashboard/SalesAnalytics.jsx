import Text from '../ui/Text';
import { useGetAllSalesQuery } from '../../redux/slice/apiSlices/salesAnalyticsApiSlice';
import useTabs from '../../hooks/useTabs';
import CustomBtn from '../ui/CustomBtn';
import { memo, useMemo } from 'react';
import ApexCharts from 'react-apexcharts';

const SalesAnalytics = () => {

    const { data, isLoading, isError, error } = useGetAllSalesQuery('', {
  keepUnusedDataFor: 60,
});

    const { categories, allSeries } = data || {};

    const allValues = allSeries
        ? allSeries.flatMap(s => s.data)
        : [];

    const minValue = allValues.length > 0 ? Math.min(...allValues) : 0;
    const maxValue = allValues.length > 0 ? Math.max(...allValues) : 100;

    const seriesData = useMemo(() => (allSeries ? allSeries.map(s => ({ ...s, data: [...s.data] })) : []
    ), [allSeries]);

    const chartOptions = useMemo(() => ({
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
        colors: ['#1E9119'],
        legend: { show: false },
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
            categories: categories || [],
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
            max: maxValue,
            min: minValue,
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: {
                formatter: (value) => {
                    return `$${value / 1000}K`;
                },
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
        responsive: [
            {
                breakpoint: 576,
                options: {
                    xaxis: {
                        labels: {
                            style: {
                                fontSize: '10px',
                            }
                        },
                    },
                    yaxis: {
                        labels: {
                            formatter: (value) => {
                                return `$${value / 1000}K`;
                            },
                            style: {
                                fontSize: '10px',
                                colors: '#64748B',
                                fontFamily: '"Plus Jakarta Sans", sans-serif',
                                fontWeight: '400',
                            }
                        }
                    },
                }
            },
            {
                breakpoint: 768,
                options: {
                    xaxis: {
                        labels: {
                            style: {
                                fontSize: '12px',
                            }
                        },
                    },
                    yaxis: {
                        labels: {
                            formatter: (value) => {
                                return `$${value / 1000}K`;
                            },
                            style: {
                                fontSize: '12px',
                                colors: '#64748B',
                                fontFamily: '"Plus Jakarta Sans", sans-serif',
                                fontWeight: '400',
                            }
                        }
                    },
                }
            },
            {
                breakpoint: 992,
                options: {
                    xaxis: {
                        labels: {
                            style: {
                                fontSize: '12px',
                            }
                        },
                    },
                    yaxis: {
                        labels: {
                            formatter: (value) => {
                                return `$${value / 1000}K`;
                            },
                            style: {
                                fontSize: '12px',
                                colors: '#64748B',
                                fontFamily: '"Plus Jakarta Sans", sans-serif',
                                fontWeight: '400',
                            }
                        }
                    },
                }
            },
            {
                breakpoint: 1200,
                options: {
                    xaxis: {
                        labels: {
                            style: {
                                fontSize: '12px',
                            }
                        },
                    },
                    yaxis: {
                        labels: {
                            formatter: (value) => {
                                return `$${value / 1000}K`;
                            },
                            style: {
                                fontSize: '12px',
                                colors: '#64748B',
                                fontFamily: '"Plus Jakarta Sans", sans-serif',
                                fontWeight: '400',
                            }
                        }
                    },
                }
            },
            {
                breakpoint: 1440,
                options: {
                    xaxis: {
                        labels: {
                            style: {
                                fontSize: '12px',
                            }
                        },
                    },
                    yaxis: {
                        labels: {
                            formatter: (value) => {
                                return `$${value / 1000}K`;
                            },
                            style: {
                                fontSize: '12px',
                                colors: '#64748B',
                                fontFamily: '"Plus Jakarta Sans", sans-serif',
                                fontWeight: '400',
                            }
                        }
                    },
                }
            }
        ]
    }), [categories, maxValue, minValue]);

    const tabs = [
        { key: "daily", label: "Daily" },
        { key: "weekly", label: "Weekly" },
        { key: "monthly", label: "Monthly" },
        { key: "yearly", label: "Yearly" },
    ];

    const { activeTab, tabs: tabList, onTabClick } = useTabs(tabs, "daily");

    return (
        <div className="bg-(--bg-white) rounded-[15px] p-[22px] col-span-full xl:col-span-2">
            <div className="flex flex-wrap justify-between mb-[10px]">
                <Text as='h6' className='font-urbanist font-bold text-lg capitalize'>Sales Analytics</Text>
                <div className="flex flex-wrap items-center justify-center mt-2 sm:mt-0 sm:justify-end gap-1">
                    {tabs?.map(({ key, label }) => (
                        <CustomBtn key={key} onClick={() => onTabClick(key)} buttonClass={`min-w-[65px] py-2 px-4 rounded-sm font-plus-jakarta text-sm font-normal text-(--text-gray-200) capitalize bg-(--bg-white) hover:bg-(--bg-primary-2) hover:text-(--text-primary) cursor-pointer transition duration-300 ease-in-out ${activeTab === key ? "bg-(--bg-primary) text-(--text-white)" : ""}`} label={label} />
                    ))}
                </div>
            </div>
            <div className='h-[35vh]'>
                <ChartWrapper
                    options={chartOptions}
                    series={seriesData}
                    type="line"
                    height='100%'
                />
            </div>
        </div>
    )
}

export const ChartWrapper = memo(({ options, series }) => (
    <ApexCharts options={options} series={series} type="line" height="100%" className="mt-5" />
));

export default SalesAnalytics