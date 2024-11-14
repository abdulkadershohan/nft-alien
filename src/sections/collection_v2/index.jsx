import { Box, Stack } from "@mui/system";
import React from "react";
import { CTypography } from "../../components";
import style from './collection.module.css';
import { collectionSectionData } from "../../@fake-data";


export default function Collection() {
    return (
        <Stack
            gap={6}
        >
            <CTypography
                fontFamily='Bakbak One'
                fontSize={'2.5rem'}
                textTransform={'uppercase'}
                text='HOT COLLECTION V2'
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
                    collectionSectionData?.map((item) => (
                        <div class={style.container}
                            key={item.id}
                        >
                            <div class={style.gradient}>
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
                                        }}
                                    />
                                    <CTypography
                                        fontFamily='Bakbak One'
                                        fontSize={'1.2rem'}
                                        textTransform={'uppercase'}
                                        text={item.name}
                                    />


                                </Stack>
                            </div>
                        </div>
                    ))
                }
            </Stack>


        </Stack>
    );
}