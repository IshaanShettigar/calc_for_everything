import React, { useState } from 'react';
import { Container, Typography, Tab, Tabs, Box, TextField, InputAdornment } from '@mui/material';

function MainMolarityCalc() {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const [moles, setMoles] = useState(0);
    const [molarity, setMolarity] = useState(0);
    const [soluteVolume, setSoluteVolume] = useState(0);


    const handleTabChange = (e, tabIndex) => {
        console.log(tabIndex);
        setCurrentTabIndex(tabIndex);
    };


    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Molarity Calculator</Typography>
            <hr />
            <br />

            <Container maxWidth="sm">
                <Tabs value={currentTabIndex} onChange={handleTabChange} sx={{ marginBottom: "2.5em" }}>
                    <Tab label='Tab 1' />
                    <Tab label='Tab 2' />
                </Tabs>
                {/* TAB 1 Contents */}
                {currentTabIndex === 0 && (
                    <Box sx={{ p: 1, display: "flex", justifyContent: "space-between" }}>
                        <TextField variant='outlined' label="Moles" sx={{ maxWidth: "40%", marginX: "10px" }}
                            value={moles}
                            InputProps={{ endAdornment: <InputAdornment position="end">mole</InputAdornment> }} />

                        <TextField variant='outlined' label="Volume of Solute" sx={{ maxWidth: "40%", marginX: "10px" }}
                            value={soluteVolume}
                            InputProps={{ endAdornment: <InputAdornment position="end">litre (l)</InputAdornment> }} />
                    </Box>
                )}
            </Container>


        </Container>
    )
}

export default MainMolarityCalc;