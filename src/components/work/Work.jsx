import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { CTypography } from "../../utility";
import style from './work.module.css';
const data = [
    {
        id: 1,
        title: 'Connect Your Wallet',
        img: require('../../assets/images/work1.png')
    },
    {
        id: 2,
        title: 'Connect Your Wallet',
        img: require('../../assets/images/work3.png')

    },
    {
        id: 3,
        title: 'Confirm the Transaction',
        img: require('../../assets/images/work3.png')

    },
    {
        id: 4,
        title: 'receive Your NFTs',
        img: require('../../assets/images/work4.png')

    }
]

export default function Work() {
    return (
        <Stack
            gap={6}
        >
            <CTypography
                fontFamily='Bakbak One'
                fontSize={'2.6rem'}
                align='center'

            >
                HOW TO <font color='#21E786'>
                    NFTALIEN
                </font> WORK
            </CTypography>
            <Stack
                justifyContent={'center'}
                alignItems={'center'}
                direction={'row'}
                gap={3}
                flexWrap={'wrap'}
            >
                {
                    data.map((item) => {
                        return (
                            <div className={style.wrapper}>
                                <div className={style.btn}>
                                    <Stack
                                        sx={{
                                            py: 2,
                                            px: 4,
                                            bgcolor: '#141B22',
                                            minWidth: 310,
                                            // '&:hover': {
                                            //     // border: '3px solid #21E786',
                                            //     borderWidth: '3px',
                                            //     borderColor: '#21E786',
                                            //     borderStyle: 'none',
                                            //     // border left 20%  3px
                                            //     borderTopStyle: 'solid',
                                            //     borderRightStyle: 'solid',

                                            // }
                                        }}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                        gap={1}
                                        key={item.id}
                                    >
                                        <Box
                                            component={'img'}
                                            src={item?.img}
                                            sx={{
                                                height: 60,
                                                width: 60,
                                            }}
                                            alt='work1'
                                        />
                                        <CTypography
                                            fontFamily='Bakbak One'
                                            fontSize={'1.1rem'}
                                            color='#21E786'
                                            align={'center'}
                                            textTransform={'uppercase'}
                                            text={'STEP 4'}
                                        />
                                        <CTypography
                                            fontFamily='Bakbak One'
                                            fontSize={'1.3rem'}
                                            align={'center'}
                                            textTransform={'capitalize'}
                                            text={item.title}
                                        />
                                    </Stack>
                                    <span className={style.BorderTopBottom}></span>
                                    <span className={style.BorderLeftRight}></span>
                                </div>
                            </div>
                        )
                    })
                }

            </Stack>
        </Stack>
    );
}
