import { Stack } from "@mui/system";
import React from "react";
import { CButton, CTypography } from "../../../utility";
const data = {
    title: "EXPLORE NFT COLLECTION",
    details: `A collection of 2525 highly-fashionable NFTs on the ETH Blockchain. Unique, 
    metaverse-ready, and designed to benefit their holders.`
}
export default function HeroSection() {
    const { title, details } = data;
    return (
        <Stack
            height={'100%'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <CTypography
                fontFamily="Bakbak One"
                align={'center'}
                fontSize={60}
                pt={'50%'}
            >
                {title}
            </CTypography>
            <Stack
                maxWidth={700}
            >
                <CTypography
                    fontFamily="Poppins"
                    align={'center'}
                    lineHeight={'30px'}
                    fontSize={'1rem'}
                >
                    {details}
                </CTypography>
            </Stack>
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                spacing={2}
                py={4}
            >
                <CButton
                    backgroundColor={'#21E786'}
                    color='#141B22'
                    padding={'5px 18px'}
                    fontSize={'0.8rem'}
                    hoverColor={'#fff'}
                >
                    connect wallet
                </CButton>
                <CButton
                    backgroundColor={'none'}
                    color='#fff'
                    padding={'5px 18px'}
                    fontSize={'0.8rem'}
                    hoverColor={'#000'}
                    border={' 2px solid #21E786'}
                >
                    whitelist now
                </CButton>

            </Stack>


        </Stack>
    )
}
