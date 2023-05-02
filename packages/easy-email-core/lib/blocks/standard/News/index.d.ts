import { IBlockData } from '../../../typings';
export declare type INews = IBlockData<{}, {
    title: string;
    description: string;
    newsLink: string;
    image: string;
}>;
export declare const News: import("../../../typings").IBlock<INews>;
