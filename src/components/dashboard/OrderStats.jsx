import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';
import Text from '../ui/Text';
import CustomSelect from '../ui/CustomSelect';

const OrderStats = () => {

    const [series] = useState([{
        name: 'order stats',
        data: [40, 30, 35, 45, 38, 49]
    }]);

    const [options] = useState({
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
        plotOptions: {
            bar: {
                columnWidth: '20px',
                distributed: true,
                borderRadius: 4,
                endingShape: 'rounded',
                // colors: {
                //     backgroundBarColors: ['#EAFBE9'],
                //     backgroundBarOpacity: 1,
                //     backgroundBarRadius: 4,
                // }
            }
        },
        dataLabels: { enabled: false },
        legend: { show: false },
        xaxis: {
            categories: [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun"],
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
            max: 60,
            min: 10,
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
        colors: ['#1E9119'],
        //     fill: {
        //     type: 'gradient',
        //     gradient: {
        //       shade: 'dark',
        //       type: 'vertical',
        //       gradientToColors: ['#1E9119'],
        //       inverseColors: false,
        //       colorStops: [
        //         { offset: 0, color: "#1E9119", opacity: 1 },
        //         { offset: 20, color: "#1E9119", opacity: 0.8 },
        //         { offset: 40, color: "#1E9119", opacity: 0.6 },
        //         { offset: 60, color: "#1E9119", opacity: 0.4 },
        //         { offset: 80, color: "#1E9119", opacity: 0.2 },
        //         { offset: 100, color: "#1E9119", opacity: 0 }
        //       ]
        //     }
        //   },
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
                            style: { fontSize: '8px' }
                        }
                    }
                }
            },
            {
                breakpoint: 768,
                options: {
                    plotOptions: {
                        bar: {
                            columnWidth: '20px'
                        }
                    },
                    xaxis: {
                        labels: {
                            style: { fontSize: '10px' }
                        }
                    }
                }
            },
            {
                breakpoint: 992,
                options: {
                    plotOptions: {
                        bar: {
                            columnWidth: '20px'
                        }
                    },
                    xaxis: {
                        labels: {
                            style: { fontSize: '14px' }
                        }
                    }
                }
            },
            {
                breakpoint: 1200,
                options: {
                    plotOptions: {
                        bar: {
                            columnWidth: '20px'
                        }
                    },
                    xaxis: {
                        labels: {
                            trim: true,
                            style: { fontSize: '12px' }
                        }
                    }
                }
            },
            {
                breakpoint: 1440,
                options: {
                    plotOptions: {
                        bar: {
                            columnWidth: '20px'
                        }
                    },
                    xaxis: {
                        labels: {
                            trim: true,
                            style: { fontSize: '10px' }
                        }
                    }
                }
            }
        ]
    });

    const [selectedValue, setSelectedValue] = useState("monthly");

    const selectedOption = [
        { value: "weekly", label: "weekly" },
        { value: "monthly", label: "monthly" },
        { value: "yearly", label: "yearly" },
    ];

    return (
        <>
            <div className="bg-(--bg-white) rounded-[15px] p-[16px] col-span-full lg:col-span-1">
                <div className="flex flex-wrap justify-between">
                    <Text as='h6' className='font-urbanist font-bold text-lg capitalize'>Order Stats</Text>

                    <CustomSelect
                        className="w-[104px]"
                        selectedOption={selectedOption}
                        selectedValue={selectedValue}
                        onValueChange={(value) => setSelectedValue(value)}
                        placeholder="Select Option" />
                </div>
                <div className='h-[40vh]'>
                    <ApexCharts
                        options={options}
                        series={series}
                        type="bar"
                        height="100%"
                    />
                </div>
            </div>
        </>
    )
}

export default OrderStats