import { IBlockData } from '../../../typings';
export declare type IQuoteCard = IBlockData<{}, {
    title: string;
    description: string;
    quoteImg: string;
    quoteInvertedImg: string;
    image: string;
    designation: string;
}>;
export declare const QuoteCard: import("../../../typings").IBlock<IQuoteCard>;
