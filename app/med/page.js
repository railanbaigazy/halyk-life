import MedFeed from "@components/med/Feed";
import MainWrapper from "@components/MainWrapper";
import { useEffect, useState } from "@node_modules/react";

const MedPage = () => {
    return (
        <MainWrapper>
            <MedFeed/>
        </MainWrapper>
    );
};

export default MedPage;