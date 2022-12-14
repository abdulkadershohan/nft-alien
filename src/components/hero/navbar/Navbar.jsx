import { IconButton } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import Logo from "../../../assets/images/logo.png";
import ArrowDownIcon from "../../../assets/svg/ArrowDownIcon";
import DiscordIcon from "../../../assets/svg/DiscordIcon";
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
    const LogoSection = () => {
        return (
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
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
    const MenuSection = () => {
        return (
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
            >
                {
                    menuItems.map(item => (
                        <Stack
                            key={Math.random()}
                            direction="row"
                            sx={{
                                cursor: "pointer",
                                '&:hover': {
                                    color: "#141B22",
                                },
                            }}
                        //spacing={1}
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
    const ButtonSection = () => {
        return (
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
            >
                <IconButton
                    variant="contained"
                    color="secondary"
                    sx={{
                        backgroundColor: "#141B22",
                    }}
                >
                    <SunIcon />
                </IconButton>
                <CButton
                    backgroundColor="#141B22"
                    btnTitle={'Discord'}
                >
                    <DiscordIcon />
                </CButton>
                <CButton
                    backgroundColor="#21E786"
                    btnTitle={'connect'}
                    color='#141B22'
                    hoverColor={'#20d781'}
                >
                    <WalletIcon />
                </CButton>
            </Stack>
        )
    }
    return (
        <Stack
            alignItems={"center"}
            py={2}
            bgcolor="#040B11"
        >
            <Stack
                direction="row"
                justifyContent="space-between"
                alignContent={"center"}
                spacing={12}
            >
                <LogoSection />
                <MenuSection />
                <ButtonSection />

            </Stack>
        </Stack>
    )
}
