import { IBlockData } from '../../../typings';
export declare type IThankyouCard = IBlockData<{}, {
    title: string;
    description: string;
    name: string;
    designation: string;
    image: string;
    signatureImage: string;
}>;
export declare const ThankyouCard: import("../../../typings").IBlock<IThankyouCard>;
