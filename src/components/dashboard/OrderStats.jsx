import React, { memo, useMemo, useState } from 'react';
import ApexCharts from 'react-apexcharts';
import Text from '../ui/Text';
import CustomSelect from '../ui/CustomSelect';
import { useGetAllOrderQuery } from '../../redux/slice/apiSlices/orderStatsApiSlice';

const OrderStats = () => {

    const { data, isLoading, isError, error } = useGetAllOrderQuery('',{
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

    const chartOptions = useMemo(() => (
        {
            chart: {
                height: '100%',
                width: '100%',
                type: 'bar',
                toolbar: { show: false },
                animations: {
                    enabled: true,
                    easing: 'easeinout',
                    speed: 2000,
                }
            },
            colors: ['#1E9119'],
            plotOptions: {
                bar: {
                    borderRadius: 5,
                    columnWidth: '20px',
                    distributed: true,
                    colors: {
                        // backgroundBarColors: ['#EAFBE9'],
                        backgroundBarOpacity: 1,
                        backgroundBarRadius: 5,
                    }
                }
            },
            dataLabels: { enabled: false },
            legend: { show: false },
            xaxis: {
                categories: categories || [],
                labels: {
                    rotate: 0,
                    trim: true,
                    style: {
                        fontSize: '13px',
                        colors: '#64748B',
                        fontFamily: '"Urbanist", sans-serif',
                        fontWeight: '400',
                    }
                },
                axisBorder: { show: false },
                axisTicks: { show: false },
                crosshairs: {
                    show: true,
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#EAFBE9',
                            colorTo: '#EAFBE9',
                            stops: [0, 100],
                            opacityFrom: 1,
                            opacityTo: 1,
                        }
                    }
                },
                tooltip: { enabled: true }
            },
            yaxis: {
                show: true,
                max: maxValue,
                min: minValue,
                axisBorder: { show: false },
                axisTicks: { show: false },
                labels: {
                    show: true,
                    style: {
                        fontSize: '13px',
                        colors: '#64748B',
                        fontFamily: '"Inter", sans-serif',
                        fontWeight: '400',
                    },
                    formatter: (val) => val.toFixed(0)
                }
            },
            grid: {
                borderColor: '#e7e7e7',
                strokeDashArray: 10,
            },
            responsive: [
                {
                    breakpoint: 576,
                    options: {
                        plotOptions: {
                            bar: {
                                borderRadius: 5,
                                colors: {
                                    backgroundBarRadius: 5,
                                },
                                columnWidth: '20px'
                            }
                        },
                        xaxis: {
                            labels: {
                                style: { fontSize: '10px' }
                            }
                        },
                        yaxis: {
                            labels: {
                                style: {
                                    fontSize: '10px',
                                    colors: '#64748B',
                                    fontFamily: '"Inter", sans-serif',
                                    fontWeight: '400',
                                },
                            }
                        }
                    }
                },
                {
                    breakpoint: 768,
                    options: {
                        plotOptions: {
                            bar: {
                                borderRadius: 5,
                                colors: {
                                    backgroundBarRadius: 5,
                                },
                                columnWidth: '20px'
                            }
                        },
                        xaxis: {
                            labels: {
                                style: { fontSize: '10px' }
                            }
                        },
                        yaxis: {
                            labels: {
                                style: {
                                    fontSize: '10px',
                                    colors: '#64748B',
                                    fontFamily: '"Inter", sans-serif',
                                    fontWeight: '400',
                                },
                            }
                        }
                    }
                },
                {
                    breakpoint: 992,
                    options: {
                        plotOptions: {
                            bar: {
                                borderRadius: 5,
                                colors: {
                                    backgroundBarRadius: 5,
                                },
                                columnWidth: '20px'
                            }
                        },
                        xaxis: {
                            labels: {
                                style: { fontSize: '12px' }
                            }
                        },
                        yaxis: {
                            labels: {
                                style: {
                                    fontSize: '12px',
                                    colors: '#64748B',
                                    fontFamily: '"Inter", sans-serif',
                                    fontWeight: '400',
                                },
                            }
                        }
                    }
                },
                {
                    breakpoint: 1200,
                    options: {
                        plotOptions: {
                            bar: {
                                borderRadius: 5,
                                colors: {
                                    backgroundBarRadius: 5,
                                },
                                columnWidth: '20px'
                            }
                        },
                        xaxis: {
                            labels: {
                                trim: true,
                                style: { fontSize: '12px' }
                            }
                        },
                        yaxis: {
                            labels: {
                                style: {
                                    fontSize: '12px',
                                    colors: '#64748B',
                                    fontFamily: '"Inter", sans-serif',
                                    fontWeight: '400',
                                },
                            }
                        }
                    }
                },
                {
                    breakpoint: 1440,
                    options: {
                        plotOptions: {
                            bar: {
                                borderRadius: 5,
                                colors: {
                                    backgroundBarRadius: 5,
                                },
                                columnWidth: '20px'
                            }
                        },
                        xaxis: {
                            labels: {
                                trim: true,
                                style: { fontSize: '12px' }
                            }
                        },
                        yaxis: {
                            labels: {
                                style: {
                                    fontSize: '12px',
                                    colors: '#64748B',
                                    fontFamily: '"Inter", sans-serif',
                                    fontWeight: '400',
                                },
                            }
                        }
                    }
                },
                {
                    breakpoint: 2400,
                    options: {
                        plotOptions: {
                            bar: {
                                borderRadius: 5,
                                colors: {
                                    backgroundBarRadius: 5,
                                },
                                columnWidth: '20px'
                            }
                        },
                        xaxis: {
                            labels: {
                                trim: true,
                                style: { fontSize: '12px' }
                            }
                        },
                        yaxis: {
                            labels: {
                                style: {
                                    fontSize: '12px',
                                    colors: '#64748B',
                                    fontFamily: '"Inter", sans-serif',
                                    fontWeight: '400',
                                },
                            }
                        }
                    }
                }
            ]
        }), [minValue, maxValue, categories]);

    const [selectedValue, setSelectedValue] = useState("monthly");

    const selectedOption = [
        { value: "weekly", label: "weekly" },
        { value: "monthly", label: "monthly" },
        { value: "yearly", label: "yearly" },
    ];

    return (
        <>
            <div className="bg-(--bg-white) rounded-[15px] p-[16px] col-span-full xl:col-span-1">
                <div className="flex flex-wrap justify-between">
                    <Text as='h6' className='font-urbanist font-bold text-lg capitalize'>Order Stats</Text>

                    <CustomSelect
                        wrapperClassName="w-[104px] px-3 py-2 bg-(--bg-secondary) rounded-[4px]"
                        labelClassName="font-urbanist font-normal text-sm text-(--text-gray-200) capitalize"
                        itemClassName="w-full bg-(--bg-secondary) text-(--text-primary) capitalize hover:bg-(--bg-primary) hover:text-(--text-white) mb-1 transition-all duration-200 ease-in-out"
                        selectedOption={selectedOption}
                        selectedValue={selectedValue}
                        onValueChange={(value) => setSelectedValue(value)}
                        placeholder="Select Option" />
                </div>
                <div className='h-[40vh]'>
                    <ChartWrapper
                        options={chartOptions}
                        series={seriesData}
                    />
                </div>
            </div>
        </>
    )
}

export const ChartWrapper = memo(({ options, series }) => (
    <ApexCharts options={options} series={series} type="bar" height="100%" />
));

export default OrderStats