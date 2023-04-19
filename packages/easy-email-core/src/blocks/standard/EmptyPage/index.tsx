import React from 'react';
import { BasicType } from '@core/constants';
import { createBlock } from '@core/utils/createBlock';
import { merge } from 'lodash';

import { BlockRenderer } from '@core/components/BlockRenderer';
import { getChildIdx, getPageIdx } from '@core/utils';

export const EmptyPage = createBlock({
  name: 'Empty Page',
  type: BasicType.EMPTY_PAGE,
  create: payload => {
    const defaultData = {
      type: BasicType.EMPTY_PAGE,
      data: {
        value: {},
      },
      attributes: {},
      children: [],
    };
    return merge(defaultData, payload);
  },
  validParentType: [],
  render(params) {
    const { data } = params;

    return (
      <>
        {data.children.map((child, index) => (
          <BlockRenderer
            {...params}
            idx={getChildIdx(getPageIdx(), index)}
            key={index}
            data={child}
          />
        ))}
      </>
    );
  },
});
