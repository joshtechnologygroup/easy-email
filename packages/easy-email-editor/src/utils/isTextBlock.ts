import { BasicType, AdvancedType } from 'easy-email-core';

export function isTextBlock(blockType: any) {
  return blockType === BasicType.CUSTOM_TEXT;
}