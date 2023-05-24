import React from 'react';
export declare const MOBILE_WIDTH = 360;
export declare const PreviewEmailContext: React.Context<{
    html: string;
    reactNode: React.ReactNode | null;
    errMsg: React.ReactNode;
    mobileWidth: number;
}>;
export declare const PreviewEmailProvider: React.FC<{}>;
