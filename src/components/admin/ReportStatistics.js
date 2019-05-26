import React, { Component } from 'react'
import styled from 'styled-components'
import Alert from 'react-s-alert'
import { Button } from 'react-bootstrap'
import Chart from 'react-google-charts'


import { getReportStatistics } from '../../utils/APIUtils'
import { getMonths, getMonthID, getYearsFromToDate} from '../../utils/DateUtils'
import LoadingIndicator from '../../common/LoadingIndicator';

const StatsContainer = styled.div`
    width: 100%;
    text-align: center;
    position: relative;
`

const PeriodSelectioPanel = styled.div`
    display: flex;
    min-height: 8vh;
    text-align: center;
    items-align: center;
    border: solid 1px lightgrey;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 5%;
    margin-left: 5%;
    padding: 1.5em 1.5em 1.5em 1.5em;
`

const SelectionCell = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    & p {
        margin-top: 8%;
        align-items: center;
        font-size: 1.2em;
    }

    & select {
        margin-left: 0.8vw;
        min-width: 8vw;
    }

`

const StyledSelection = styled.select`
    min-width: 4vw;
    min-height: 5vh;
    border-radius: 3px;
    background-color: white;
    border: solid 1px grey;
`

const StyledButton = styled(Button)`

`

const TotalInfoPanel = styled.div`
    margin-left: 20%;
    margin-right: 20%;
    display: flex;
    flex-wrap: wrap
    justify-content: space-between;
    margin-top: 2.5em;
`

const ChartsPanel = styled.div`
    margin-top: 2vh;
`

const ChartContainer = styled.div`
`

const InfoCell = styled.div`
    text-align: center;
    width: 33%;
    & .info-title {
        font-weight: bold;
        font-size: 1.5em;
    }

    & .info-value {
        font-size: 1.3em;
    }
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
                todayReportedAdvertsCount: 0,
                monthUserReportsCount: {},
                monthReportedUsersCount: {},
                allReportedUsersCount: 0,
                todayUserReportsCount: 0,
                todayReportedUsersCount: 0
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
        const years = getYearsFromToDate(2019);
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
            <StatsContainer>
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
                    <InfoCell>
                        <p className="info-title">Liczba zgłoszonych ogłoszeń</p>
                        <p className="info-value">{this.state.data.allReportedAdvertsCount}</p>
                    </InfoCell>
                    <InfoCell>
                        <p className="info-title">Liczba zgłoszonych ogłoszeń (dzisiaj)</p>
                        <p className="info-value">{this.state.data.todayReportedAdvertsCount}</p>
                    </InfoCell>
                    <InfoCell>
                        <p className="info-title">Liczba zgłoszeń (dzisiaj)</p>
                        <p className="info-value">{this.state.data.todayAdvertReportsCount}</p>
                    </InfoCell>
                    <InfoCell>
                        <p className="info-title">Liczba zgłoszonych użytkowników</p>
                        <p className="info-value">{this.state.data.allReportedUsersCount}</p>
                    </InfoCell>
                    <InfoCell>
                        <p className="info-title">Liczba zgłoszonych użytkowników (dzisiaj)</p>
                        <p className="info-value">{this.state.data.todayReportedUsersCount}</p>
                    </InfoCell>
                    <InfoCell>
                        <p className="info-title">Liczba zgłoszeń użytkowników (dzisiaj)</p>
                        <p className="info-value">{this.state.data.todayUserReportsCount}</p>
                    </InfoCell>
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
                                    format: '####',
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
                                    title: 'Zgłoszenia ogłoszeń w danym przedziale',
                                    chartArea: { width: '30%' },
                                    hAxis: {
                                        title: 'Miesiąc',
                                        minValue: this.state.options.monthFrom,
                                        maxValue: this.state.options.monthTo
                                    },
                                    vAxis: {
                                        format: '####',
                                        title: 'Liczba zgłoszeń',
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
                                data={this.transformCharData(this.state.data.monthReportedUsersCount)}
                                options={{
                                    title: 'Zgłoszeni użytkownicy w danym przedziale',
                                    chartArea: { width: '30%' },
                                    hAxis: {
                                        title: 'Miesiąc',
                                        minValue: this.state.options.monthFrom,
                                        maxValue: this.state.options.monthTo
                                    },
                                    vAxis: {
                                        format: '####',
                                        title: 'Liczba zgłoszonych użytkowników',
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
                                data={this.transformCharData(this.state.data.monthUserReportsCount)}
                                options={{
                                    title: 'Zgłoszenia użytkowników w danym przedziale',
                                    chartArea: { width: '30%' },
                                    hAxis: {
                                        title: 'Miesiąc',
                                        minValue: this.state.options.monthFrom,
                                        maxValue: this.state.options.monthTo
                                    },
                                    vAxis: {
                                        format: '####',
                                        title: 'Liczba zgłoszeń',
                                        minValue: 0
                                    }
                                }}
                                legendToggle
                            />                        
                    </ChartContainer>
                </ChartsPanel>
            </StatsContainer>
        )
    }
}

export default ReportStatistics;