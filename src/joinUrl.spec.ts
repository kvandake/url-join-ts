import { joinUrl, joinUrlP } from './joinUrlFunc';

describe('joinUrl', () => {
  it.each([['http'], ['https']])('joinUrl with %s protocol', protocol => {
    const baseUrl = `${protocol}://test.com`;
    expect(joinUrl(baseUrl)).toBe(`${baseUrl}`);
    expect(joinUrl(baseUrl, null)).toBe(`${baseUrl}`);
    expect(joinUrl(baseUrl, undefined)).toBe(`${baseUrl}`);
    expect(joinUrl(baseUrl, null, '1')).toBe(`${baseUrl}/1`);
    expect(joinUrl(baseUrl, undefined, '1')).toBe(`${baseUrl}/1`);
    expect(joinUrl(baseUrl, '')).toBe(`${baseUrl}`);
    expect(joinUrl(baseUrl, '1')).toBe(`${baseUrl}/1`);
    expect(joinUrl(baseUrl, '1/')).toEqual(`${baseUrl}/1`);
    expect(joinUrl(baseUrl, '/1')).toBe(`${baseUrl}/1`);
    expect(joinUrl(baseUrl, '1', '2')).toBe(`${baseUrl}/1/2`);
    expect(joinUrl(baseUrl, '1/2')).toBe(`${baseUrl}/1/2`);
  });

  it('joinUrlP with params', () => {
    const baseHttpUrl = 'http://test.com';
    expect(joinUrlP(baseHttpUrl, ['1'], { a: 1, b: 2 })).toBe(`${baseHttpUrl}/1?a=1&b=2`);
    expect(joinUrlP(baseHttpUrl, ['1'], { a: '1 2' })).toBe(`${baseHttpUrl}/1?a=1%202`);
    expect(joinUrlP(baseHttpUrl, ['1'], {})).toBe(`${baseHttpUrl}/1`);
    // @ts-ignore
    expect(joinUrlP(baseHttpUrl, ['1'], null)).toBe(`${baseHttpUrl}/1`);
    // @ts-ignore
    expect(joinUrlP(baseHttpUrl, ['1'], undefined)).toBe(`${baseHttpUrl}/1`);
  });
});
