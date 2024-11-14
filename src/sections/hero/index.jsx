import { Stack } from "@mui/system";
import React from "react";
import bgImage from '../../assets/images/background/heroBgImg.png';
import HeroBodySection from "./SectionBody";

export default function Hero() {
    return (
        <Stack
            sx={{
                backgroundImage: `url(${bgImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // aspectRatio: '16/9',
                py: 5,
            }}
        >
            <HeroBodySection />
        </Stack>
    );
}
