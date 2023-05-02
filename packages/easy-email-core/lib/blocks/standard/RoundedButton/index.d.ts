import { IBlockData } from '../../../typings';
export declare type IRoundedButton = IBlockData<{
    'inner-padding': string;
    padding: string;
}, {
    text: string;
    link: string;
}>;
export declare const RoundedButton: import("../../../typings").IBlock<IRoundedButton>;
