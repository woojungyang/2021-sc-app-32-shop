import axios from 'axios';

import { filePath } from '../../modules/util';

export const bannerApi = async (id) => {
  try {
    const { data } = await axios.get(process.env.REACT_APP_BANNER_URL + '?id=' + id);
    const { content: contents, BoardFiles } = data.list;
    const rs = contents.split('^^').map((v, i) => {
      let [title, price, content, link, pos] = v.split('|');
      return {
        title,
        price,
        content,
        link,
        pos,
        file: filePath(BoardFiles[i].saveName),
      };
    });
    return rs;
  } catch (err) {
    console.log(err);
  }
};

axios
  .get(process.env.REACT_APP_BANNER_URL + '?id=241')
  .then(({ data }) => {
    const { content: contents, BoardFiles } = data.list;
  })
  .catch((err) => console.log(err));
