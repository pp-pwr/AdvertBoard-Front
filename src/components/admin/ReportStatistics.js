import React, { Component } from 'react'
import styled from 'styled-components'
import Alert from 'react-s-alert'
import { Button } from 'react-bootstrap'
import Chart from 'react-google-charts'


import { getReportStatistics } from '../../utils/APIUtils'
import { getMonths, getMonthID, getYearsFromToDate} from '../../utils/DateUtils'
import LoadingIndicator from '../../common/LoadingIndicator';


const PeriodSelectioPanel = styled.div`
    display: flex;
    width: 80vw;
`

const SelectionCell = styled.div`

`

const StyledSelection = styled.select`

`

const StyledButton = styled(Button)`

`

const TotalInfoPanel = styled.div`

`

const ChartsPanel = styled.div`

`

const ChartContainer = styled.div`

`

class ReportStatistics extends Component {

    constructor() {
        super()

        this.data = {}

        this.state = {
            data: {
                monthAdvertReportsCount: {},
                monthReportedAdvertsCount: {},
                allReportedAdvertsCount: 0,
                todayAdvertReportsCount: 0,
                todayReportedAdvertsCount: 0
            },
            mounted: false,
            options: {
                year: new Date().getFullYear(),
                monthFrom: 1,
                monthTo: 12
            }
        }
    }

    createOptions(optionList) {
        const options = []
        for(let i = 0; i < optionList.length; i++) {
            options.push(
                <option key={optionList[i]}>{optionList[i]}</option>
            )
        }
        return options;
    }
    
    componentDidMount() {
        this.setState({
            mounted: true
        })
        this.loadData()
    }

    componentWillUnmount() {
        this.setState({
            mounted: false
        })
    }

    getYearSelectors() {
        const years = getYearsFromToDate(2010);
        return this.createOptions(years)
    }

    getMonthSelectors() {
        const months = getMonths()
        return this.createOptions(months)
    }

    updateYearSelection(event) {
        const selection = event.target.value

        this.setState({
            options: {
                ...this.state.options,
                year: selection
            }
        })
    }

    updateMonthFromSelection(event) {
        const selection = event.target.value
        const monthID = getMonthID(selection)

        if(monthID <= this.state.options.monthTo) {
            this.setState({
                options: {
                    ...this.state.options,
                    monthFrom: monthID
                }
            })
        } else {
            Alert.error('Miesiąc końca zakresu musi następować po miesiącu początku');
        }
    }

    handleRefreshClick(event) {
        event.preventDefault();

        this.loadData();
    }

    loadData() {
        const year = this.state.options.year;
        const monthFrom = this.state.options.monthFrom;
        const monthTo = this.state.options.monthTo;

        getReportStatistics(year, monthFrom, monthTo)
        .then(response => {
            this.setState({
                data: response
            }, () => {
                console.log(this.state)
            })

            console.log(year + " " + monthFrom + " " + monthTo)
        })
        .catch(error => {
            Alert.error((error && error.message) || "Ups!")
        })
    }

    updateMonthToSelection(event) {
        const selection = event.target.value
        const monthID = getMonthID(selection)

        if(monthID >= this.state.options.monthFrom) {
            this.setState({
                options: {
                    ...this.state.options,
                    monthTo: monthID
                }
            }, () => {
                console.log(this.state)
            })
        } else {
            Alert.error('Miesiąc końca zakresu musi następować po miesiącu początku');
        }
    }

    transformCharData(data) {
        const transformedData = []

        transformedData.push(['Miesiąc', 'Liczba zgłoszeń'])

        for (var key in data) {
            transformedData.push(['' + key, data[key]])
        }

        console.log(transformedData)
        return transformedData
    }

    render() {
        if(!this.state.mounted) {
            return <LoadingIndicator />
        }

        return (
            <div>
                <PeriodSelectioPanel>
                    <SelectionCell>
                        <p>Rok: </p>
                        <StyledSelection onChange={e => this.updateYearSelection(e)}>
                            {this.getYearSelectors()}
                        </StyledSelection>
                    </SelectionCell>
                    <SelectionCell>
                        <p>Miesiąc od:</p>
                        <StyledSelection onChange={e => this.updateMonthFromSelection(e)}>
                            {this.getMonthSelectors()}
                        </StyledSelection>
                    </SelectionCell>
                    <SelectionCell>
                        <p>Miesiąc do:</p>
                        <StyledSelection onChange={e => this.updateMonthToSelection(e)}>
                            {this.getMonthSelectors()}
                        </StyledSelection>
                    </SelectionCell>
                    <SelectionCell>
                        <StyledButton onClick={e => this.handleRefreshClick(e)}> 
                            Odśwież
                        </StyledButton>
                    </SelectionCell>
                </PeriodSelectioPanel>
                <TotalInfoPanel>

                </TotalInfoPanel>
                <ChartsPanel>
                    <ChartContainer>
                        <Chart 
                            width='100%'
                            height={300}
                            chartType="ColumnChart"
                            loader={<LoadingIndicator />}
                            data={this.transformCharData(this.state.data.monthReportedAdvertsCount)}
                            options={{
                                title: 'Zgłoszone ogłoszenia w danym przedziale',
                                chartArea: { width: '30%' },
                                hAxis: {
                                    title: 'Miesiąc',
                                    minValue: this.state.options.monthFrom,
                                    maxValue: this.state.options.monthTo
                                },
                                vAxis: {
                                    title: 'Liczba zgłoszonych ogłoszeń',
                                    minValue: 0
                                }
                            }}
                            legendToggle
                        />
                    </ChartContainer>
                    <ChartContainer>
                        <Chart 
                                width='100%'
                                height={300}
                                chartType="ColumnChart"
                                loader={<LoadingIndicator />}
                                data={this.transformCharData(this.state.data.monthAdvertReportsCount)}
                                options={{
                                    title: 'Zgłoszenia w danym przedziale',
                                    chartArea: { width: '30%' },
                                    hAxis: {
                                        title: 'Miesiąc',
                                        minValue: this.state.options.monthFrom,
                                        maxValue: this.state.options.monthTo
                                    },
                                    vAxis: {
                                        title: 'Liczba zgłoszeń',
                                        minValue: 0
                                    }
                                }}
                                legendToggle
                            />                        
                    </ChartContainer>
                </ChartsPanel>
            </div>
        )
    }
}

export default ReportStatistics;