import React, { useState } from 'react'


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Select from '@mui/material/Select';
import i18next from 'i18next';

// Contains the value and text for the options
const languages = [
    { value: 'en', text: "English" },
    { value: 'hi', text: "Hindi" },
    { value: 'mr', text: "Marathi" }
]

const LangugeSelection = React.memo(() => {
    const [lang, setLang] = useState('en');
    const handleChange = e => {

        setLang(e.target.value);
        i18next.changeLanguage(e.target.value)
    }
    return (
        <FormControl fullWidth style={{ color: "white", borderColor: "white" }}>
            <InputLabel id="demo-simple-select-label" style={{ color: "white", borderColor: "white" }}>Language</InputLabel>
            <Select
                value={lang}
                label="Language"
                onChange={handleChange}
                style={{ color: "white", borderColor: "white" }}
            >
                {languages.map(item => <MenuItem key={item.value} value={item.value}>{item.text}</MenuItem>)}

            </Select>
        </FormControl>
    )
})

export default LangugeSelection