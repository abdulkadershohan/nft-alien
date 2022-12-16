import { Box, Stack } from "@mui/system";
import React from "react";
import { CTypography } from "../../utility";
import style from './collection.module.css';
const data = [
    {
        id: 1,
        name: 'sKISIRS #02',
        image: require('../../assets/images/collection1.png')
    },
    {
        id: 2,
        name: 'sKELATON #01',
        image: require('../../assets/images/collection2.png')
    },
    {
        id: 3,
        name: 'sKELATON #02',
        image: require('../../assets/images/collection3.png')
    },
    {
        id: 4,
        name: 'sKELATON #03',
        image: require('../../assets/images/collection4.png')
    },
    {
        id: 5,
        name: 'sKELATON #04',
        image: require('../../assets/images/collection5.png')
    },
    {
        id: 6,
        name: 'sKELATON #05',
        image: require('../../assets/images/collection6.png')
    },
    {
        id: 7,
        name: 'sKELATON #06',
        image: require('../../assets/images/collection7.png')

    },
    {
        id: 8,
        name: 'sKELATON #07',
        image: require('../../assets/images/collection8.png')
    }
]

export default function Collection() {
    return (
        <Stack
            gap={6}
        >
            <CTypography
                fontFamily='Bakbak One'
                fontSize={'2.5rem'}
                textTransform={'uppercase'}
                text='HOT COLLECTION'
                align='center'
            />

            <Stack
                direction='row'
                gap={2}
                alignItems='center'
                justifyContent='center'
                flexWrap='wrap'
            >

                {
                    data.map((item) => (
                        <div className={style.wrapper}
                            key={item.id}
                        >
                            <div className={style.btn}>
                                <Stack
                                    sx={{
                                        p: 2,
                                        bgcolor: 'rgba(255, 255, 255, 0.05);',
                                    }}
                                    justifyContent={'center'}
                                    gap={1}
                                    key={item.id}
                                >
                                    <Box
                                        component='img'
                                        src={item.image}
                                        alt={item.name}
                                        sx={{
                                            width: 286,
                                            height: 286,
                                            aspectRatio: '1 / 1',
                                        }}
                                    />
                                    <CTypography
                                        fontFamily='Bakbak One'
                                        fontSize={'1.2rem'}
                                        textTransform={'uppercase'}
                                        text={item.name}
                                    />


                                </Stack>
                                <span className={style.BorderTopBottom}></span>
                                <span className={style.BorderLeftRight}></span>
                            </div>
                        </div>
                    ))
                }
            </Stack>


        </Stack>
    );
}
