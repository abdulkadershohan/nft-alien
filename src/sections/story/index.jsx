import { Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { storyData } from "../../@fake-data";
import { CButton, CTypography } from "../../components";
import style from './story.module.css';

export default function StorySection() {
    return (
        <Stack
        >
            <Grid container
                alignItems='center'
                spacing={{
                    xs: 4,
                    md: 2
                }}
            >
                <Grid item xs={12} md={6} >
                    <Stack
                        alignItems='center'
                    >
                        <Stack
                            sx={{
                                alignItems: {
                                    xs: 'center',
                                    md: 'flex-start'
                                },
                            }}
                        >
                            <CTypography
                                fontFamily='Bakbak One'
                                fontSize={'2.2rem'}
                                textTransform={'uppercase'}
                                text='tHE STORY'
                                pb={1}
                                textAlign={{
                                    xs: 'center',
                                    md: 'left'
                                }}
                            />
                            <Box
                                maxWidth={500}
                            >
                                <CTypography
                                    fontFamily='Poppins'
                                    fontSize={'14px'}
                                    fontWeight={200}
                                    color='#C2C3C5'
                                    text={`Our collection's priority is to reward NFT holders by developing utilities they can use in their current everyday life. Not in a hypothetical future.`}
                                    textAlign={{
                                        xs: 'center',
                                        md: 'left'
                                    }}
                                />
                            </Box>
                            <Stack
                                direction='row'
                                alignItems='center'
                                flexWrap='wrap'
                                gap={2}
                                py={4}
                            >
                                <Box>
                                    < CTypography
                                        fontFamily='Bakbak One'
                                        fontSize={'1.1rem'}
                                        fontWeight={200}
                                        text='Total Item'
                                        color={'#C2C3C5'}
                                    />
                                    < CTypography
                                        fontFamily='Bakbak One'
                                        fontSize={'2.5rem'}
                                        fontWeight={200}
                                        text='2240+'
                                        sx={{
                                            textShadow: '0px 4px 16px rgba(255, 255, 255, 0.4)'
                                        }}
                                    />
                                </Box>
                                <Box>
                                    < CTypography
                                        fontFamily='Bakbak One'
                                        fontSize={'1.1rem'}
                                        fontWeight={200}
                                        text='Profiles whitelisted'
                                        color={'#C2C3C5'}
                                    />
                                    < CTypography
                                        fontFamily='Bakbak One'
                                        fontSize={'2.5rem'}
                                        fontWeight={200}
                                        text='1000+'
                                        sx={{
                                            textShadow: '0px 4px 16px rgba(255, 255, 255, 0.4)'
                                        }}
                                    />
                                </Box>
                            </Stack>
                            <Box>
                                <CButton
                                    backgroundColor={'none'}
                                    color='#fff'
                                    padding={'5px 18px'}
                                    fontSize={'0.8rem'}
                                    hoverColor={'#000'}
                                    border={' 2px solid #21E786'}
                                >
                                    READ MORE
                                </CButton>
                            </Box>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack
                        direction='row'
                        justifyContent='center'
                        alignItems='center'
                        flexWrap='wrap'
                        gap={3}
                    >
                        {
                            storyData?.map((item, index) => (
                                <div className={style.wrapper}
                                    key={Math.random()}
                                >
                                    <div className={style.btn}>
                                        <Stack
                                            key={item.id}
                                            p={2}
                                            bgcolor='#141B22'
                                            gap={2}
                                            position='relative'
                                            height={200}
                                            width={270}
                                        >
                                            <CTypography
                                                fontFamily='Bakbak One'
                                                fontSize={'3.5rem'}
                                                color='#21E786'
                                                text={index > 10 ? index + 1 : '0' + (index + 1)}
                                                align='center'
                                                lineHeight={.5}
                                                pt={4}
                                                sx={{
                                                    opacity: .3
                                                }}
                                            />
                                            <Box
                                                position='absolute'
                                                top={'30%'}
                                                left={0}
                                                right={0}
                                            >
                                                <Stack
                                                    alignItems='center'
                                                >
                                                    <CTypography
                                                        fontFamily='Bakbak One'
                                                        fontSize={'1.2rem'}
                                                        text={item.title}
                                                    />
                                                    <Box
                                                        maxWidth={220}
                                                    >
                                                        <CTypography
                                                            fontFamily='Poppins'
                                                            fontSize={'0.9rem'}
                                                            text={item.detail}
                                                            color='#C2C3C5'
                                                            textAlign='center'
                                                        />
                                                    </Box>
                                                </Stack>
                                            </Box>


                                        </Stack>
                                        <span className={style.BorderTopBottom}></span>
                                        <span className={style.BorderLeftRight}></span>
                                    </div>
                                </div>
                            ))
                        }

                    </Stack>
                </Grid>

            </Grid>

        </Stack>
    );
}
