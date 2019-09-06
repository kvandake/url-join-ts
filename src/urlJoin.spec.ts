import { urlJoin, urlJoinP } from './urlJoinFunc';

describe('urlJoin', () => {
  it.each([['http'], ['https']])('urlJoin with %s protocol', protocol => {
    const baseUrl = `${protocol}://test.com`;
    expect(urlJoin(baseUrl)).toBe(`${baseUrl}`);
    expect(urlJoin(baseUrl, null)).toBe(`${baseUrl}`);
    expect(urlJoin(baseUrl, undefined)).toBe(`${baseUrl}`);
    expect(urlJoin(baseUrl, null, '1')).toBe(`${baseUrl}/1`);
    expect(urlJoin(baseUrl, undefined, '1')).toBe(`${baseUrl}/1`);
    expect(urlJoin(baseUrl, '')).toBe(`${baseUrl}`);
    expect(urlJoin(baseUrl, '1')).toBe(`${baseUrl}/1`);
    expect(urlJoin(baseUrl, '1/')).toEqual(`${baseUrl}/1`);
    expect(urlJoin(baseUrl, '/1')).toBe(`${baseUrl}/1`);
    expect(urlJoin(baseUrl, '1', '2')).toBe(`${baseUrl}/1/2`);
    expect(urlJoin(baseUrl, '1/2')).toBe(`${baseUrl}/1/2`);
  });

  it('urlJoinP with params', () => {
    const baseHttpUrl = 'http://test.com';
    expect(urlJoinP(baseHttpUrl, ['1'], { a: 1, b: 2 })).toBe(`${baseHttpUrl}/1?a=1&b=2`);
    expect(urlJoinP(baseHttpUrl, ['1'], { a: '1 2' })).toBe(`${baseHttpUrl}/1?a=1%202`);
    expect(urlJoinP(baseHttpUrl, ['1'], {})).toBe(`${baseHttpUrl}/1`);
    // @ts-ignore
    expect(urlJoinP(baseHttpUrl, ['1'], null)).toBe(`${baseHttpUrl}/1`);
    // @ts-ignore
    expect(urlJoinP(baseHttpUrl, ['1'], undefined)).toBe(`${baseHttpUrl}/1`);
  });
});
