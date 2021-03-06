import React from 'react';
import { Select,InputLabel,MenuItem,Button} from '@mui/material';
import './Sidebar.css';

const Sidebar = ({options,setOptions,RoomID})=>{
    const handleChangeLanguage = (e)=>{
        const obj = {...options};
        obj.mode=e.target.value;
        setOptions(obj);
    }
    const handleChangeTheme = (e)=>{
        const obj = {...options};
        obj.theme=e.target.value;
        setOptions(obj);
        console.log(obj)
    }
    return(
        <div className='language-theme-option'>
                <div>
                    <InputLabel id="demo-simple-select-label">Language</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={options.mode}
                        label="Language"
                        onChange={handleChangeLanguage}
                        className='select-option'
                    >
                        <MenuItem value={'c'}>C</MenuItem>
                        <MenuItem value={'text/x-c++src'}>C++</MenuItem>
                        <MenuItem value={'text/x-java'}>Java</MenuItem>
                        <MenuItem value={'text/x-python'}>Python</MenuItem>
                        <MenuItem value={'text/javascript'}>JavaScript</MenuItem>
                    </Select>
                </div>
                <div>
                    <InputLabel id="demo-simple-select-label">Theme</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={options.theme}
                        label="Theme"
                        onChange={handleChangeTheme}
                        className='select-option'
                    >
                        <MenuItem value={'eclipse'}>Eclipse</MenuItem>
                        <MenuItem value={'cobalt'}>Cobalt</MenuItem>
                        <MenuItem value={'material'}>Material</MenuItem>
                        <MenuItem value={'dracula'}>Dracula</MenuItem>
                        <MenuItem value={'material-palenight'}>Material-Palenight</MenuItem>
                    </Select>
                </div>
                <div>
                    <Button variant="outlined" onClick={() => {navigator.clipboard.writeText(`${process.env.REACT_APP_SERVER_URL}/join-room/${RoomID}`)}}>Invite Collaborators</Button>
                </div>
        </div>
    );
}

export default Sidebar;