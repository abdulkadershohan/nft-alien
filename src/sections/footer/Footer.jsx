import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { CTypography } from "../../utility";

const data = [
    {
        id: 1,
        logo: require('../../assets/images/footerImg/footerImg18.png'),
        bgColor: 'transparent'

    },
    {
        id: 2,
        logo: require('../../assets/images/footerImg/footerImg1.png'),
        bgColor: '#141B22'
    },
    {
        id: 3,
        logo: require('../../assets/images/footerImg/footerImg2.png'),

        bgColor: 'transparent'

    },
    {
        id: 4,
        logo: require('../../assets/images/footerImg/footerImg3.png'),
        bgColor: '#141B22'

    },
    {
        id: 5,
        logo: require('../../assets/images/footerImg/footerImg4.png'),
        bgColor: 'transparent'

    },
    {
        id: 6,
        logo: require('../../assets/images/footerImg/footerImg5.png'),
        bgColor: '#141B22'

    },
    {
        id: 7,
        logo: require('../../assets/images/footerImg/footerImg6.png'),
        bgColor: '#141B22'

    },
    {
        id: 8,
        logo: require('../../assets/images/footerImg/footerImg7.png'),
    },
    {
        id: 9,
        logo: require('../../assets/images/footerImg/footerImg8.png'),
        bgColor: '#141B22'

    },
    {
        id: 10,
        logo: require('../../assets/images/footerImg/footerImg9.png'),
    },
    {
        id: 11,
        logo: require('../../assets/images/footerImg/footerImg10.png'),

        bgColor: '#141B22'

    },
    {
        id: 12,
        logo: require('../../assets/images/footerImg/footerImg11.png'),
    },
    {
        id: 13,
        logo: require('../../assets/images/footerImg/footerImg12.png'),

    },
    {
        id: 14,
        logo: require('../../assets/images/footerImg/footerImg13.png'),
        bgColor: '#141B22'

    },
    {
        id: 15,
        logo: require('../../assets/images/footerImg/footerImg14.png'),
    },
    {
        id: 16,
        logo: require('../../assets/images/footerImg/footerImg15.png'),
        bgColor: '#141B22'

    },
    {
        id: 17,
        logo: require('../../assets/images/footerImg/footerImg16.png'),
    },
    {
        id: 18,
        logo: require('../../assets/images/footerImg/footerImg17.png'),
        bgColor: '#141B22'

    }
]

export default function Footer() {
    return (
        <Stack
            py={10}
            gap={4}
        >
            <CTypography
                fontFamily='Bakbak One'
                fontSize={'2.6rem'}
                align='center'
                textTransform='uppercase'

            >
                <font color='#21E786'>
                    BINABOX
                </font> pARTNER
            </CTypography>
            <Stack
                alignItems='center'
            >
                <Stack
                    maxWidth={'75%'}
                    direction='row'
                    justifyContent='center'
                    alignItems='center'
                    flexWrap='wrap'
                    gap={2}
                >
                    {
                        data.map((item, index) => (
                            <Stack
                                key={item.id}
                                bgcolor={item.bgColor}
                                px={3}
                                py={1}
                            >
                                <Box
                                    component='img'
                                    src={item.logo}
                                    alt='logo'
                                    width={110}
                                    height={60}
                                    sx={{
                                        aspectRatio: '2 / 1',
                                    }}
                                />
                            </Stack>
                        ))
                    }
                </Stack>
            </Stack>
            <CTypography
                fontFamily='Bakbak One'
                fontSize={'.8rem'}
                align='center'
                textTransform='lowercase'
                color={'#C2C3C5'}
                pt={8}
            >
                @ {' '}{new Date().getFullYear()} NFTALIEN ALL RIGHTS RESERVED
            </CTypography>
        </Stack >
    );
}
