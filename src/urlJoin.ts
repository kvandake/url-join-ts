import {
  DELIMITER_PATH,
  DELIMITER_SEARCH_PARAMS,
  DELIMITER_SEARCH_VALUES,
  DELIMITER_URL_PARTS,
  URL_REGEX,
} from './constants';

const trimPath = (path = '') => path.replace(/^\/|\/$/g, '');

export class UrlJoin {
  private params: object | null = null;

  constructor(private readonly baseUrl, private readonly paths: string[]) {}

  public toString(): string {
    // check is url
    if (!URL_REGEX.test(this.baseUrl)) {
      throw new TypeError('Url must be a valid url.');
    }

    let resultUrl = [this.baseUrl, ...this.paths]
      .filter(Boolean)
      .map(trimPath)
      .join(DELIMITER_PATH);

    if (this.hasParams()) {
      const queryParams = Object.keys(this.params!)
        .map(key => {
          return encodeURIComponent(key) + DELIMITER_SEARCH_VALUES + encodeURIComponent(this.params![key]);
        })
        .join(DELIMITER_SEARCH_PARAMS);
      resultUrl += DELIMITER_URL_PARTS + queryParams;
    }

    return resultUrl;
  }

  public queryParams(params: object): UrlJoin {
    this.params = params;
    return this;
  }

  private hasParams(): boolean {
    return !!this.params && Object.keys(this.params).length > 0;
  }
}
