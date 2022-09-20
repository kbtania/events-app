import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

import styles from '../../styles/events-search.module.css';

import { useRef } from 'react';

function EventsSearch(props) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const years = ['2022', '2023'];
    const [month, setMonth] = React.useState('');
    const [year, setYear] = React.useState('');

    const monthRef = useRef();
    const yearRef = useRef();

    const handleMonthChange = (event) => {
        setMonth(event.target.value);
    };
    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const selectedMonth = monthRef.current.value;
        const selectedYear = yearRef.current.value;
        console.log('selectedMonth = ', month)
        console.log('selectedMonth = ', year)

        props.onSearch(year, month);
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <h2 className={styles.title}>Filter Events</h2>
            <FormControl fullWidth>
                <InputLabel id="month">Month</InputLabel>
                <Select
                    ref={monthRef}
                    labelId="month-label"
                    id="month-select"
                    value={month}
                    label="Month"
                    onChange={handleMonthChange}
                >{
                        months.map((month, index) => {
                            return <MenuItem key={month} value={index + 1}>{month}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="year">Year</InputLabel>
                <Select
                    ref={yearRef}
                    labelId="year-label"
                    id="year-select"
                    value={year}
                    label="Year"
                    onChange={handleYearChange}
                >{
                        years.map(year => {
                            return <MenuItem key={year} value={year}>{year}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
            <Button size="small" variant="outlined" sx={{ color: '#E04DB0', border: '1px solid #AB46D2' }} onClick={submitHandler}>
                Search
            </Button>
        </Box>
    );
}

export default EventsSearch;