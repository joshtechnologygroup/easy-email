import { BasicType } from '@core/constants';
import { createBlock } from '@core/utils/createBlock';
import { merge } from 'lodash';

export const PodCustomPage = createBlock({
  name: 'Newsletter Page',
  type: BasicType.POD_CUSTOM_PAGE,
  create: payload => {
    const defaultData = {
      type: BasicType.POD_CUSTOM_PAGE,
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
    throw Error('Not Implemented');
  },
});;;
