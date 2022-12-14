import { Stack } from "@mui/system";
import React from "react";
import bgImage from '../../assets/images/heroBgImg.png';
import HeroSection from "./heroSection/HeroSection";
import Navbar from "./navbar/Navbar";

export default function HeroMain() {
    return (
        <Stack
            sx={{
                backgroundImage: `url(${bgImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
            }}
        >
            <Navbar />
            <HeroSection />
        </Stack>
    );
}
