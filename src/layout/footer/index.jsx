import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { footerData } from "../../@fake-data";
import { CTypography } from "../../components";


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
                        footerData?.map((item, index) => (
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
