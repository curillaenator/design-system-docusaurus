import request from '../../core/request';

const getImagesLink = async (iconIds: string[], fileName: string, token: string): Promise<Record<string, string>> => {
  const res = await request(`/v1/images/${fileName}?ids=${iconIds.join(',')}&format=svg`, token);

  return res.images as Record<string, string>;
};

export default getImagesLink;
