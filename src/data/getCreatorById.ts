import { getContentCreators } from './getCreators';

export const getCreatorByID = (id: string) => {
  return getContentCreators.find((c) => c.id === id);
};
