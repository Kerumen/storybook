import { RawSourceMap } from 'source-map';
import { transform, Result } from './babel-plugin';

import { Loader } from '../../types/webpack';

const managerEntryloader: Loader = function managerEntryloader(
  source,
  inputSourceMap: RawSourceMap
) {
  const callback = this.async();
  this.cacheable(true);

  transform(source.toString('utf8'), inputSourceMap, {}).then(({ code, map }: Result) => {
    callback(null, `${code}; console.log("here")`, map);
  });
};

export { managerEntryloader as default };