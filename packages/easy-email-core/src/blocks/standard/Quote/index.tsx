import React from 'react';
import { merge } from 'lodash';
import { Liquid } from 'liquidjs';

import { IBlockData } from '@core/typings';
import { AdvancedType, BasicType } from '@core/constants';
import { createBlock } from '@core/utils/createBlock';
import { getPreviewClassName } from '@core/utils';
import quoteImg from '@core/assets/images/quote.svg';
import quoteInvertedImg from '@core/assets/images/quote-inverted.svg';

import { MJML } from './template';

const engine = new Liquid();

export type IQuoteCard = IBlockData<
  {},
  {
    title: string;
    description: string;
    quoteImg: string;
    quoteInvertedImg: string;
    image: string;
    designation: string;
  }
>;

export const QuoteCard = createBlock<IQuoteCard>({
  name: 'Quote',
  type: BasicType.QUOTE_CARD,
  create: payload => {
    const defaultData: IQuoteCard = {
      type: BasicType.QUOTE_CARD,
      data: {
        // TODO: CP-25658: Update default data
        value: {
          title: 'Selva Mathew',
          description:
            'The prodigious growth of digitisation has unequivocally contributed siginificantly to business success. Furthermore, the numerous benefits of the IIT bombay programme undeniably offer a guranteed carrer escalation! nce, strong and invincible programs becomes paramount. IIT Bombay Programe in your carrier provide yoiu with impeccable blend of theory.',
          designation: 'HOD, Department of Design',
          image: '',
          quoteImg,
          quoteInvertedImg,
        },
      },
      attributes: {},
      children: [],
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.WRAPPER, AdvancedType.WRAPPER, BasicType.POD_CUSTOM_PAGE],
  render(params) {
    const {
      data: { data, type },
      mode,
      idx,
    } = params;
    const truncatedDescription = data.value.description.substring(0, 220);

    const mjmlData = {
      title: data.value.title,
      description: truncatedDescription,
      designation: data.value.designation,
      quoteImg1: quoteImg,
      quoteImg2: quoteInvertedImg,
      ...(data.value.image ? { image: data.value.image } : {}),
      class: mode === 'testing' && idx ? getPreviewClassName(idx, type) : '',
    };

    return engine.parseAndRenderSync(MJML, mjmlData);
  },
});
