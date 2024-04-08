import {
    React,
    Grid,
    styled,
    Paper,
    Avatar,
    ButtonGroup,
    Box,
    Button,
    BottomNavigation,
    BottomNavigationAction,
    Drawer,
    CssBaseline,
    AppBar,
    Toolbar,
    Stack,
    List,
    Typography,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    GridViewOutlinedIcon,
    AddCircleOutlinedIcon,
    CreditScoreOutlinedIcon,
    PersonOutlinedIcon,
    LogoutOutlinedIcon,
    IconButton
} from '../Utils/Mui'

// import CusButton from "../../AddTestStyle"
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { SideButton } from '../Utils/StyledComponents';

const useStyles = makeStyles((theme, clicked) => ({
    drawer: {
        marginLeft: '-10px',
        width: '250px',
        flexShrink: 0,

        '& .MuiDrawer-paper': {
            // marginLeft: '-19px',
            marginTop: '150px',
            width: '200px',
            height: '595px',
            backgroundColor: '#F0F2F7',
            borderRadius: '0 15px 15px 0'
        },
    },
    editImage: {
        width: '480px',
    },
    buttonNav: {
        width: '800px',
        height: '100px',
        borderRadius: '50px',
    },
    SideBarButton: {
        color: clicked ? 'primary' : undefined,
        '&:hover': {
            backgroundColor: 'transparent',
        }
    },

    NameTypo: {

    }

}));



function SideBar() {

    const buttonsData = [
        { name: 'Dashboard', num: 'a', icon: <GridViewOutlinedIcon sx={{ fontSize: '20px', marginRight: '5px' }} /> },
        { name: 'Add Test', num: 'b', icon: <AddCircleOutlinedIcon sx={{ fontSize: '20px', marginRight: '5px' }} /> },
        { name: 'Result', num: 'c', icon: <CreditScoreOutlinedIcon sx={{ fontSize: '20px', marginRight: '5px' }} /> },
        { name: 'User Register', num: 'd', icon: <PersonOutlinedIcon sx={{ fontSize: '20px', marginRight: '5px' }} /> },

    ];
    const [activeButton, setActiveButton] = useState({ a: false, b: false, c: false, d: false });

    const handleButtonClick = (id) => {
        setActiveButton((prevState) => ({                                       //Set a button active at a time..
            ...Object.fromEntries(Object.keys(prevState).map(key => [key, key === id ? true : false]))
        }));
    };

    const classes = useStyles();
    return (
        <Drawer className={classes.drawer}
            variant="permanent"
            anchor="left"
            PaperProps={{ elevation: '5', }}
        >
            {/* <Toolbar /> */}
            <Grid container marginTop={6} marginLeft={-2}>
                <Stack direction={"row"} marginLeft={5.5} >
                    <Avatar sx={{ bgcolor: '#323A6E' }}>L</Avatar>
                    <Typography className={classes.NameTypo} color='#323A6E' variant="p" height={40} paddingTop={1.2} marginLeft={1.5}>Lehaan</Typography>
                </Stack>

                <List sx={{ marginTop: '20px' }}>
                    {buttonsData.map((button, index) => (
                        <ListItem disablePadding sx={{ marginLeft: '35px' }} >
                            <SideButton disableElevation disableTouchRipple disableFocusRipple
                                clicked={activeButton[button.num]}
                                onClick={() => handleButtonClick(button.num)}
                            >
                                <>{button.icon}</>
                                <Typography variant='h9' fontSize={15} fontWeight={600}>{button.name}</Typography>
                            </SideButton>
                        </ListItem>
                    ))}
                    <ListItem disablePadding >

                        <SideButton sx={{ marginTop: '140px', marginLeft: '35px' }} disableElevation disableTouchRipple disableFocusRipple
                        >
                            <LogoutOutlinedIcon />
                            <Typography variant='h9' fontSize={15} fontWeight={600}>Logout</Typography>
                        </SideButton>
                    </ListItem>
                </List>
            </Grid>


        </Drawer>
    )
};

export default SideBar;