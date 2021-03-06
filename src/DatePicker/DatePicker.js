import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Calendar} from '../'

export class DatePicker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hidden: true,
            selectedDate: "",
            arrSelectedDates: [],
            formattedDate: ""
        };

        this.updateDate = this.updateDate.bind(this);
        this.modifyDate = this.modifyDate.bind(this);
        this.sendUpdate = this.sendUpdate.bind(this);
        this.formatDate = this.formatDate.bind(this);
    }

    openCalendar = (type) => {
        if (type == "input") {
            if (this.state.hidden) {
                this.setState({hidden: !this.state.hidden});
            }
        }
        else {
            this.setState({hidden: !this.state.hidden})
        }
    }


    modifyDate(e) {
        this.setState({formattedDate: e.target.value});
    }

    //This is being used only when the user presses enter or clicks outside of the component
    formatDate(date) {
        let regex = /[!$%^&*()_+|~=`{}\[\]:'<>?,.\a-zA-Z]/;
        let formatDate = "";
        if (this.props.enableRangeSelection) {

            if(date.length == 0) {
                return "";
            }
                
            let firstDateMonth = date[0].getMonth() + 1;
            let firstDateDay = date[0].getDate();
            let firstDateYear = date[0].getFullYear();

            let secondDateMonth  = date[1].getMonth() + 1;
            let secondDateDay = date[1].getDate();
            let secondDateYear = date[1].getFullYear();
            
            if (firstDateYear >=  3000 || secondDateYear >= 3000) {
                return "";
            }
            formatDate = firstDateMonth + "/" + firstDateDay + "/" + firstDateYear + "-" + secondDateMonth + "/" + secondDateDay + "/"+ secondDateYear;
        }
        else {
            //Checks if the type of date doesn't match those types and that it doesn't contain any special character symbols
            if ((typeof date != "array" || typeof date != "date" || typeof date != "object") && (date.toString().search(regex)!=1)) {
                return "";
            }
            else {
                let month = date[0].getMonth();
                let day = date[0].getDate();
                let year = date[0].getFullYear();
    
                formatDate = month+"/"+day+"/"+year;
            }
        }
        return formatDate;
    }

    sendUpdate(e) {
        let regex = /[!$%^&*()_+|~=`{}\[\]:'<>?,.\a-zA-Z]/;
        if (e.key === "Enter") {

            //Checks first if range is enabled
            if(this.props.enableRangeSelection) {

                //If the formattedDate contains a list of special characters symbols then it will be reset
                if (this.state.formattedDate.search(regex) != -1 || this.state.formattedDate == "" || this.state.formattedDate.split("-").length < 2) {
                    this.setState({formattedDate: "", arrSelectedDates: "undefined", hidden: false});
                }
                else {
                        //Breaks the input into an array
                        let dateRange = this.state.formattedDate.split("-");
                        let dateSeparatedFirstRange = dateRange[0].split("/");
                        let dateSeparatedSecondRange = dateRange[1].split("/");

                        //First date
                        let firstYearRange = parseInt(dateSeparatedFirstRange[2], 10);
                        let firstDateRange = parseInt(dateSeparatedFirstRange[1], 10);
                        let firstMonthRange =  parseInt(dateSeparatedFirstRange[0], 10);

                        //Second date
                        let secondYearRange = parseInt(dateSeparatedSecondRange[2], 10);
                        let secondDateRange = parseInt(dateSeparatedSecondRange[1], 10);
                        let secondMonthRange =  parseInt(dateSeparatedSecondRange[0], 10);

                        //Checks if the input is actually numbers and follows the required form
                        if ((firstYearRange != NaN || firstDateRange != NaN || firstMonthRange != NaN) && (secondYearRange != NaN || secondDateRange != NaN || secondMonthRange != NaN) && 
                            (1 <= firstDateRange && firstDateRange <= 31) && (1<firstMonthRange && firstMonthRange <= 12) && (firstYearRange <= 3000) && (1 <= secondDateRange && secondDateRange <= 31) && (1<secondMonthRange && secondMonthRange <= 12)&&
                            (secondYearRange <= 3000)) {

                            let firstDate = new Date(firstYearRange, firstMonthRange - 1, firstDateRange);
                            let secondDate = new Date(secondYearRange, secondMonthRange - 1, secondDateRange);
                            let arrSelected = [];
                            //Swaps the order in case one date is bigger than the other
                            firstDate.getTime() > secondDate.getTime() ? arrSelected = [secondDate, firstDate] : arrSelected = [firstDate, secondDate]

                            this.setState({
                                selectedDate: '',
                                arrSelectedDates: arrSelected
                            })

                        }
                        else {
                            this.setState({
                                formattedDate: "",
                                selectedDate: "undefined",
                                arrSelectedDates: "undefined"
                            });
                            }
                        }
            }
            else {
                    if (this.state.formattedDate.search(regex) != -1) {
                        this.setState({formattedDate: this.formatDate(this.state.selectedDate),
                                    selectedDate: "undefined"})
                    }
                    else {
                        
                        let dateSeparated = this.state.formattedDate.split("/");
                        let year = parseInt(dateSeparated[2], 10);
                        let date = parseInt(dateSeparated[1], 10);
                        let month =  parseInt(dateSeparated[0], 10);
        
                        if ((year != NaN || date != NaN || month != NaN) && (1 <= date && date <= 31) && (1<month && month <= 12) && (year <= 3000)) {
                            this.setState({
                                selectedDate: new Date(year, month - 1, date)
                            });
                        }
                        else {
                            this.setState({
                                selectedDate: "undefined",
                                formattedDate: ""
                            });
                        }
                    }
            }

        }
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.click, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.click, false);
    }

    click = (e) => {

        if (this.component.contains(e.target)) {
            return;
        }
        this.clickOutside();

    }

    clickOutside = () => {

        let regex = /[!$%^&*()_+|~=`{}\[\]:'<>?,.\a-zA-Z]/;
            if(this.props.enableRangeSelection) {
                
                //If the formattedDate contains a list of special characters symbols then it will be reset
                if (this.state.formattedDate.search(regex) != -1 || this.state.formattedDate == "" || this.state.formattedDate.split("-").length < 2) {
                    this.setState({formattedDate: "", arrSelectedDates: "undefined", hidden: true});
                }
                else {

                    //The range dates being split.
                    let dateRange = this.state.formattedDate.split("-");
                    let dateSeparatedFirstRange = dateRange[0].split("/");
                    let dateSeparatedSecondRange = dateRange[1].split("/");

                    let firstYearRange = parseInt(dateSeparatedFirstRange[2], 10);
                    let firstDateRange = parseInt(dateSeparatedFirstRange[1], 10);
                    let firstMonthRange =  parseInt(dateSeparatedFirstRange[0], 10);
    
                    let secondYearRange = parseInt(dateSeparatedSecondRange[2], 10);
                    let secondDateRange = parseInt(dateSeparatedSecondRange[1], 10);
                    let secondMonthRange =  parseInt(dateSeparatedSecondRange[0], 10);

                    if ((firstYearRange != NaN || firstDateRange != NaN || firstMonthRange != NaN) && (secondYearRange != NaN || secondDateRange != NaN || secondMonthRange != NaN) && 
                        (1 <= firstDateRange && firstDateRange <= 31) && (1<firstMonthRange && firstMonthRange <= 12) && (firstYearRange <= 3000) && (1 <= secondDateRange && secondDateRange <= 31) && (1<secondMonthRange && secondMonthRange <= 12)&&
                        (secondYearRange <= 3000) && dateRange[0].search(regex) === -1 &&  dateRange[1].search(regex) === -1) {
    
                        let firstDate = new Date(firstYearRange, firstMonthRange - 1, firstDateRange);
                        let secondDate = new Date(secondYearRange, secondMonthRange - 1, secondDateRange);
                        //Swaps the order in case one date is bigger than the other
                        if (firstDate.getTime() > secondDate.getTime()) {
                            this.setState({
                                selectedDate: '',
                                arrSelectedDates: [secondDate, firstDate]
                            });
                        }
                        else {
                            this.setState({
                                selectedDate: '',
                                arrSelectedDates: [firstDate, secondDate]
                            });
                        }
    
                    }
                    else {
                        this.setState({
                            formattedDate: "",
                            arrSelectedDates: "undefined",
                            selectedDate: ""
                        });
                    }
                    this.setState({hidden: true});
                }

            }
            else {

                if (this.state.formattedDate.search(regex) != -1) {
                    this.setState({formattedDate: this.formatDate(this.state.selectedDate), selectedDate: "undefined"})
                }
                else {

                    let dateSeparated = this.state.formattedDate.split("/");
                    let year = parseInt(dateSeparated[2], 10);
                    let date = parseInt(dateSeparated[1], 10);
                    let month =  parseInt(dateSeparated[0], 10);
        
                    if ((year != NaN || date != NaN || month != NaN) && (1 <= date && date <= 31) && (1<month && month <= 12) && (year <= 3000)) {
                        this.setState({
                            selectedDate: new Date(year, month - 1, date)
                        });
                    }
                    else {
                        this.setState({
                            formattedDate: "",
                            selectedDate: "undefined"
                        });
                    }
            }
                this.setState({hidden: true});
            }
    }

    updateDate(date) {

        if (this.props.enableRangeSelection) {

            if (date.length == 2) {
                let firstDateMonth = date[0].getMonth() + 1;
                let firstDateDay = date[0].getDate();
                let firstDateYear = date[0].getFullYear();

                let secondDateMonth = date[1].getMonth() + 1;
                let secondDateDay = date[1].getDate();
                let secondDateYear = date[1].getFullYear();

                let formatDate=firstDateMonth+"/"+firstDateDay+"/"+firstDateYear+"-"+secondDateMonth+"/"+secondDateDay+"/"+secondDateYear;
                this.setState({
                    arrSelectedDates: date,
                    formattedDate: formatDate
                })
            }
            else {
                let firstDateMonth = date[0].getMonth() + 1;
                let firstDateDay = date[0].getDate();
                let firstDateYear = date[0].getFullYear();

                let formatDate = firstDateMonth + "/" + firstDateDay + "/" + firstDateYear;

                this.setState({
                    arrSelectedDates: date,
                    formattedDate: formatDate
                })
            }
        }
        else {

            let month = date.getMonth() + 1;
            let day = date.getDate();
            let year = date.getFullYear();
    
            let formatDate = month+"/"+day+"/"+year;

            this.setState({
                selectedDate: date,
                formattedDate: formatDate
            });
        }

    }

    render() {
        return (<div className = "fd-date-picker" ref={component => this.component = component}>
                    <div className="fd-popover">
                        <div className="fd-popover__control">
                            <div className="fd-input-group fd-input-group--after">
                                <input type="text" placeholder="mm/dd/yyyy" onClick={() => this.openCalendar("input")} value={this.state.formattedDate} onChange={this.modifyDate} onKeyPress={this.sendUpdate}/> 
                                <span className="fd-input-group__addon fd-input-group__addon--after fd-input-group__addon--button">
                                    <button className="fd-popover__control fd-button--icon fd-button--secondary sap-icon--calendar" onClick={() => this.openCalendar()}></button>
                                </span>
                            </div>
                    </div>
                    <div className="fd-popover__body" aria-hidden={this.state.hidden}>
                        <Calendar onChange={this.updateDate} enableRangeSelection={this.props.enableRangeSelection} customDate={this.props.enableRangeSelection?this.state.arrSelectedDates:this.state.selectedDate}/>
                    </div>
                    </div>
                </div>)
    }
}

DatePicker.propTypes = {
    enableRangeSelection: PropTypes.bool
}