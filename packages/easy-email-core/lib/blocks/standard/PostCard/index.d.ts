import { IBlockData } from '../../../typings';
export declare type IPostCard = IBlockData<{}, {
    title: string;
    description: string;
    postLink: string;
    image: string;
    attachmentUrl?: string;
}>;
export declare const PostCard: import("../../../typings").IBlock<IPostCard>;
