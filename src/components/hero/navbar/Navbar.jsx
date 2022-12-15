import { Drawer, IconButton } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import Logo from "../../../assets/images/logo.png";
import ArrowDownIcon from "../../../assets/svg/ArrowDownIcon";
import CloseIcon from "../../../assets/svg/CloseIcon";
import DiscordIcon from "../../../assets/svg/DiscordIcon";
import MenuIcon from "../../../assets/svg/MenuIcon";
import SunIcon from "../../../assets/svg/SunIcon";
import WalletIcon from "../../../assets/svg/WalletIcon";
import { CButton, CTypography } from "../../../utility";
const menuItems = [
    {
        id: 1,
        title: "Home",
        link: "/",
        icon: true,

    },
    {
        id: 2,
        title: "About",
        link: "/about",
        icon: true,
    },
    {
        id: 3,
        title: "roadmap",
        link: "/roadmap",
        icon: true,
    },
    {
        id: 4,
        title: "COLLECTION",
        link: "/collection",
        icon: false,
    },
    {
        id: 5,
        title: "FAQ",
        link: "/faq",
        icon: true,
    }
]

export default function Navbar() {
    const [active, setActive] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const LogoSection = () => {
        return (
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                width="fit-content"
                sx={{
                    cursor: "pointer",
                    '&:hover': {
                        transform: "scale(1.1)",
                    },
                }}
                component="a"
                href="/"
            >
                {/* logo section */}
                <Box
                    component="img"
                    src={Logo}
                    alt="logo"
                    sx={{
                        width: 30,
                        height: 30,
                    }}
                />
                <CTypography
                    fontFamily="Bakbak One"
                    fontSize="2rem"
                    fontWeight="400"
                >
                    NFTALIEN
                </CTypography>

            </Stack>
        )
    }
    const MenuSection = ({ direction }) => {
        return (
            <Stack
                direction={direction}
                // justifyContent="space-between"
                alignItems="center"
                spacing={2}
                px={direction === 'column' && 2}
            >
                {
                    menuItems.map(item => (
                        <Stack
                            key={Math.random()}
                            direction="row"
                            justifyContent={direction === 'column' && 'center'}
                            sx={{
                                cursor: "pointer",
                                '&:hover': {
                                    borderBottom: "2px solid #f00",
                                },
                            }}
                        >
                            <CTypography
                                fontFamily="Bakbak One"
                                fontSize="1rem"
                                fontWeight="400"
                                textTransform="uppercase"
                                alignItems="center"
                                letterSpacing={' 0.1em'}
                                color={active === item.id ? "#f00" : "#fff"}
                                sx={{
                                    '&:hover': {
                                        color: "#f00",
                                    },
                                }}
                                component="a"
                                onClick={() => setActive(item.id)}
                            >
                                {item.title}
                            </CTypography>
                            {
                                item.icon && <ArrowDownIcon />
                            }

                        </Stack>
                    ))
                }
            </Stack >
        )
    }
    const ButtonSection = ({ direction }) => {
        return (
            <Stack
                direction={direction}
                justifyContent={direction === 'column' ? "space-between" : "space-around"}
                alignItems="center"
                spacing={2}
            >
                <IconButton
                    variant="contained"
                    color="secondary"
                    size="small"
                    sx={{
                        backgroundColor: "#141B22",
                    }}
                >
                    <SunIcon />
                </IconButton>
                <CButton
                    backgroundColor="#141B22"
                    btnTitle={'Discord'}
                    padding="6px 14px"
                    fontSize="0.8rem"

                >
                    <DiscordIcon />
                </CButton>
                <CButton
                    backgroundColor="#21E786"
                    btnTitle={'connect'}
                    color='#141B22'
                    hoverColor={'#fff'}
                    padding="6px 14px"
                    fontSize="0.8rem"
                >
                    <WalletIcon />
                </CButton>
            </Stack>
        )
    }
    return (
        <Stack>
            {/* navbar */}
            <Stack
                alignItems={"center"}
                py={2}
                bgcolor="#040B11"
                sx={{
                    display: {
                        xs: 'none',
                        lg: 'flex',
                    }
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignContent={"center"}
                    spacing={10}
                >
                    <LogoSection />
                    <MenuSection
                        direction={"row"}
                    />
                    <ButtonSection
                        direction={"row"}
                    />

                </Stack>
            </ Stack>
            {/* nav mneu */}
            <Stack
                display={{
                    xs: 'flex',
                    lg: 'none',
                }}
                p={2.5}
            >
                <Box>
                    <IconButton
                        variant="contained"
                        color="secondary"
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
                <Drawer
                    open={open}
                    onClose={() => setOpen(false)}
                    anchor="left"
                    variant="temporary"
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    PaperProps={{
                        sx: {
                            backgroundColor: '#040B11',
                        }
                    }}
                    sx={{
                        display: { xs: 'block', lg: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '70%' },
                    }}
                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems={"center"}
                        py={2}
                        px={4}
                    >
                        <LogoSection />
                        <Box>
                            <IconButton
                                variant="contained"
                                color="error"
                                onClick={() => setOpen(false)}
                            >
                                <CloseIcon />
                            </IconButton>
                        </Box>

                    </Stack>
                    <Stack
                        onClick={() => setOpen(false)}
                    >
                        <MenuSection
                            direction="column"
                        />
                    </Stack>
                    <Stack pt={8}
                        onClick={() => setOpen(false)}

                    >
                        <ButtonSection
                            direction="row"
                        />
                    </Stack>

                </Drawer>


            </Stack>
        </Stack>
    )
}
