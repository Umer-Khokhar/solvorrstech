import React from 'react';
import {
    CustomBuiltIllustration,
    CustomerExperienceIllustration, CustomizableSolutionsIllustration,
    SEOAuthorityIllustration, SEOConnectivityIllustration, SEOCustomIllustration, SEODataDrivenIllustration,
    SEODecisionsIllustration,
    SEOLeadsIllustration, SEOPerformanceIllustration, SEOReportingIllustration, SEOSecureIllustration,
    SEOTrafficIllustration
} from "@/app/components/design/Illustrations";

const Page = () => {
    return (
        <div className={"mt-32"}>
            <SEOAuthorityIllustration />
            <SEOTrafficIllustration />
            <SEOLeadsIllustration />
            <SEODataDrivenIllustration />
            <SEOCustomIllustration />
            <SEOConnectivityIllustration />
            <SEODecisionsIllustration />
            <SEOPerformanceIllustration />
            <SEOReportingIllustration />
            <SEOSecureIllustration />
            <CustomerExperienceIllustration />
            <CustomBuiltIllustration />
            <CustomizableSolutionsIllustration />
        </div>
    );
};

export default Page;